import {Component, Input, OnInit} from '@angular/core';
import {PlanDefinition} from "../../../fhir/dstu3/PlanDefinition";
import {SmartOnFhirService} from "../../../fhir-util/smart-on-fhir.service";
import {CurrentPatientService} from "../../../services/current-patient.service";
import {ContextService} from "../../../fhir-util/context.service";
import {ActivatedRoute, Router} from "@angular/router";
import {DomainResource} from "../../../fhir/dstu3/DomainResource";

@Component({
  selector: 'app-plan-definition-display',
  templateUrl: './plan-definition-display.component.html',
  styleUrls: ['./plan-definition-display.component.sass']
})
export class PlanDefinitionDisplayComponent implements OnInit {

  @Input() resource: DomainResource;
  private planDefinition: PlanDefinition;
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
    this.planDefinition = this.resource as PlanDefinition;
    this.title = ( this.planDefinition.title? this.planDefinition.title : this.planDefinition.id );
    this.hasCurrentPatient = this.currentPatientService.hasPatient();
  }

  apply(){
    let parameters:string = "";
    parameters += "?patient=Patient/"+this.currentPatientService.getPatient().id;
    this.applying=true;
    this.sofs.doOperation( "PlanDefinition/"+this.planDefinition.id, "apply",parameters)
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
