import {Component, Input, OnInit} from '@angular/core';
import {SmartOnFhirService} from "../../../fhir-util/smart-on-fhir.service";
import {CurrentPatientService} from "../../../services/current-patient.service";
import {ContextService} from "../../../fhir-util/context.service";
import {ActivatedRoute, Router} from "@angular/router";
import {DomainResource} from "../../../fhir/dstu3/DomainResource";
import {ActivityDefinition} from "../../../fhir/dstu3/ActivityDefinition";

@Component({
  selector: 'app-activity-definition-display',
  templateUrl: './activity-definition-display.component.html',
  styleUrls: ['./activity-definition-display.component.sass']
})
export class ActivityDefinitionDisplayComponent implements OnInit {

  @Input() resource: DomainResource;
  private activityDefinition: ActivityDefinition;
  private title: string;
  private hasCurrentPatient : boolean = false;
  private applying: boolean = false;

  constructor(
    private sofs: SmartOnFhirService,
    private currentPatientService:CurrentPatientService,
    private contextService: ContextService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.activityDefinition = this.resource as ActivityDefinition;
    this.title = ( this.activityDefinition.title? this.activityDefinition.title : this.activityDefinition.id );
    this.hasCurrentPatient = this.currentPatientService.hasPatient();
  }

  apply(){
    let parameters:string = "";
    parameters += "?patient=Patient/"+this.currentPatientService.getPatient().id;
    this.applying=true;
    this.sofs.doOperation( "ActivityDefinition/"+this.activityDefinition.id, "apply",parameters)
      .subscribe( res => {
        console.log("apply:")
        console.log(res);
        let cp = this.contextService.postContextResource(res);
        this.router.navigate(["fhir", res.resourceType, cp.id], { queryParamsHandling: 'preserve' });
      }, err =>{
        console.log( err );
        this.applying = false;
      });
  }
}
