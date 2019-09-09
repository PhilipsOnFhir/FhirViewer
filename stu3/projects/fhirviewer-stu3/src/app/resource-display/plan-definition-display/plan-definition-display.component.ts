import {Component, Input, OnInit} from '@angular/core';
import {DomainResource, Patient, PlanDefinition, Reference} from "fhir2angular-stu3";
import {SmartOnFhirService} from "../../../../../smartonfhir-stu3/src/lib/fhir-stu3/smart-on-fhir.service";
import {ContextService} from "../../../../../smartonfhir-stu3/src/lib/service/context.service";
import {ActivatedRoute, Router} from "@angular/router";
import {DisplayTypeEnum} from "../resource-display.component";

@Component({
  selector: 'app-plan-definition-display',
  templateUrl: './plan-definition-display.component.html',
  styleUrls: ['./plan-definition-display.component.css']
})
export class PlanDefinitionDisplayComponent implements OnInit {
  @Input() resource: DomainResource;
  @Input() format: DisplayTypeEnum = DisplayTypeEnum.NICE;

  private planDefinition: PlanDefinition;
  private title: string;
  private applying: boolean = false;
  private hasPatientReference: boolean=false;
  private patientReference: string;

  constructor(
    private sofs: SmartOnFhirService,
    private contextService: ContextService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.planDefinition = this.resource as PlanDefinition;
    this.title = ( this.planDefinition.title? this.planDefinition.title : this.planDefinition.id );
    // check contextservice
    let patient = this.contextService.getCurrentPatient();
    if ( patient ){
      this.patientReference = Patient.def+"/"+patient.id;
      this.hasPatientReference=true;
    }
    // update based on parameters
    this.route.queryParamMap.subscribe(params => {
      let patient = params.get("patient");
      const ref = new Reference(); ref.reference=patient;
      this.sofs.getReference(ref).subscribe( res => {
        this.contextService.setSubject(res);
      })
      console.log(patient);
      if ( !patient ){
        const p = this.contextService.getCurrentPatient();
        if ( p ){
          patient = p.resourceType+"/"+p.id;
        }
      }
      this.patientReference =patient;
      this.hasPatientReference= ( patient!=null );

      let format = params.get("format");
      if ( this.hasPatientReference && format===DisplayTypeEnum.PERFORM ){
        this.apply();
      }
    });
  }

  apply(){
    let parameters:string = "";
    parameters += "?patient="+this.patientReference;
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

