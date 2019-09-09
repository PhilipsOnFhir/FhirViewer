import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DisplayTypeEnum} from "../resource-display.component";
import {SmartOnFhirService} from "../../../../../smartonfhir-stu3/src/lib/fhir-stu3/smart-on-fhir.service";
import {Router} from "@angular/router";
import {PatientUtil} from "../../../../../smartonfhir-stu3/src/lib/fhir-stu3/util/patient-util";
import {Resource, Group} from "fhir2angular-stu3";
import {group} from "@angular/animations";
import {OperationDefinition} from "../../../../../fhir2angular-stu3/src/lib/OperationDefinition";
import {ResourceTypeEnum} from "../../../../../fhir2angular-stu3/src/lib/ResourceTypeEnum";
import {ContextService} from "../../../../../smartonfhir-stu3/src/lib/service/context.service";

@Component({
  selector: 'app-group-display',
  templateUrl: './group-display.component.html',
  styleUrls: ['./group-display.component.css']
})
export class GroupDisplayComponent implements OnInit {
  @Input()  resource;
  @Input()  format = DisplayTypeEnum.NICE;

  name: string;
  private group: Group;
  private exportPresent: boolean =false;

  constructor( private sofs: SmartOnFhirService, private router: Router, private context: ContextService) { }

  ngOnInit() {
    this.group = this.resource as Group;
    this.name  = this.group.resourceType+"/"+this.group.id;
    this.sofs.supportsResourceOperation( ResourceTypeEnum.GROUP, "export").subscribe(
      found => this.exportPresent =found
    );

  }

  doExport() {
    this.sofs.doOperationAsync("Group/" + this.group.id, "export", "")
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
          const cr = this.context.postContextResource(res.body);
          this.router.navigate(["context", cr.id ], {queryParamsHandling: 'preserve'});
        }
      }, err => {
        console.log(err);
      });

  }
}
