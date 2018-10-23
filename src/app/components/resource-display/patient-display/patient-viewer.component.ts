import {Component, Input, OnInit} from '@angular/core';
import {Patient} from '../../../fhir/dstu3/Patient';
import {Resource} from '../../../fhir/dstu3/Resource';
import {CurrentPatientService} from '../../../services/current-patient.service';
import {SmartOnFhirService} from '../../../fhir-util/smart-on-fhir.service';
import {ContextService} from '../../../fhir-util/context.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-patient-viewer',
  templateUrl: './patient-viewer.component.html',
  styleUrls: ['./patient-viewer.component.sass']
})
export class PatientViewerComponent implements OnInit {

  @Input() resource: Resource;
  patient: Patient;

  constructor(private currentPatientService: CurrentPatientService,
              private sofs: SmartOnFhirService,
              private contextService: ContextService,
              private router: Router,
              private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.patient = this.resource as Patient;

  }

  getPreferredName(): string {
    let name: string;
    name = ( (this.patient.name && this.patient.name.length > 0 ? this.patient.name[0].text : 'Unknown'));
    return name;
  }

  selectCurrent() {
    // this.currentPatientService.setPatient(this.patient);
    this.router.navigate([],
      { relativeTo: this.activatedRoute,
               queryParams: { subject: this.patient.resourceType + '/' + this.patient.id },
               queryParamsHandling: 'merge'
             }
      );
    // this.router.navigate([], { relativeTo: this.activatedRoute, queryParams: { county: countyId }, queryParamsHandling: 'merge' });
  }

  getEverything() {
    this.sofs.doOperation('Patient/' + this.patient.id, 'everything', '')
      .subscribe(res => {
        console.log(res);
        const cp = this.contextService.postContextResource(res);
        this.router.navigate(['fhir', res.resourceType, cp.id], {queryParamsHandling: 'preserve'});
      }, err => {
        console.log(err);
      });
  }

  doExport() {
    this.sofs.doOperationAsync('Patient/' + this.patient.id, 'export', '')
      .subscribe(res => {
        console.log(res);
        const contentLocation = res.headers.get('Content-Location');
        // console.log(res.headers.get('Content-Location'));
        // console.log(res.headers.get('Content-Type'));
        const cp = this.contextService.postContextResource(res.body);
        if (contentLocation) {
          this.router.navigate(['async'], {
            queryParamsHandling: 'merge',
            queryParams: {cl: res.headers.get('Content-Location')}
          });
        } else {
          this.router.navigate(['fhir', res.body.resourceType, cp.id], {queryParamsHandling: 'preserve'});
        }

      }, err => {
        console.log(err);
      });
  }
}
