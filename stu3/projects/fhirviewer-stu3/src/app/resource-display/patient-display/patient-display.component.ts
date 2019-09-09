import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Patient} from "fhir2angular-stu3";
import {PatientUtil} from "../../../../../smartonfhir-stu3/src/lib/fhir-stu3/util/patient-util";
import {SmartOnFhirService} from "../../../../../smartonfhir-stu3/src/lib/fhir-stu3/smart-on-fhir.service";
import {Resource} from "fhir2angular-stu3";
import {Router} from "@angular/router";
import {ResourceTypeEnum} from "../../../../../fhir2angular-stu3/src/lib/ResourceTypeEnum";
import {ContextService} from "../../../../../smartonfhir-stu3/src/lib/service/context.service";

@Component({
  selector: 'app-patient-display',
  templateUrl: './patient-display.component.html',
  styleUrls: ['./patient-display.component.css']
})
export class PatientDisplayComponent implements OnInit {
  @Input()  resource;
  @Input()  format = "nice";

  name: string;
  private patient: Patient;
  private exportPresent: boolean = false;
  everythingPresent: boolean = false;

  constructor( private sofs: SmartOnFhirService, private context: ContextService, private router: Router) { }

  ngOnInit() {
    this.patient = this.resource as Patient;
    this.name    = PatientUtil.getPreferredName(this.patient);
    this.sofs.supportsResourceOperation( ResourceTypeEnum.PATIENT, "export").subscribe(
      found => this.everythingPresent =found
    );
    this.sofs.supportsResourceOperation( ResourceTypeEnum.PATIENT, "everything").subscribe(
      found => this.exportPresent =found
    );
  }

  doExport() {
    this.sofs.doOperationAsync("Patient/" + this.patient.id, "export", "")
      .subscribe(res => {
        console.log(res);
        let contentLocation = res.headers.get('Content-Location');
        if (contentLocation) {
          this.router.navigate(["async"], {
            queryParamsHandling: 'merge',
            queryParams: {cl: res.headers.get('Content-Location')}
          });
        }
        else {
          console.log(res);
          const cr= this.context.putContextResource(res.body);
          this.router.navigate(["fhir", cr.resourceType, cr.id], {queryParamsHandling: 'preserve'});
        }
      }, err => {
        console.log(err);
      });

  }

  doEverything() {
    this.sofs.doOperation("Patient/" + this.patient.id, "everything", "")
      .subscribe(res => {
        console.log(res);
        const cr= this.context.putContextResource(res);
        this.router.navigate(["fhir", cr.resourceType, cr.id], {queryParamsHandling: 'preserve'});
      }, err => {
        console.log(err);
      });
  }
}
