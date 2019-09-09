import {Component, Input, OnInit} from '@angular/core';
import {SmartOnFhirService} from "../../../../../smartonfhir-stu3/src/lib/fhir-stu3/smart-on-fhir.service";
import {ContextService} from "../../../../../smartonfhir-stu3/src/lib/service/context.service";
import {Router} from "@angular/router";
import {CarePlan, CarePlanStatusEnum, DomainResource, Resource, Annotation} from "fhir2angular-stu3";

@Component({
  selector: 'app-careplan-display',
  templateUrl: './careplan-display.component.html',
  styleUrls: ['./careplan-display.component.css']
})
export class CareplanDisplayComponent implements OnInit {

  @Input() resource: DomainResource;
  title: string = "-";
  status: string = "-";
  description: string= "-";
  subject: Resource;
  context: Resource;
  definition: Resource[];
  basedOn: Resource[];
  replaces: Resource[];
  careplan: CarePlan;
  private newAnnotation: Annotation = new Annotation();

  constructor(
    private sofs: SmartOnFhirService,
    private contextService: ContextService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.sofs.setContainedResourceSource( this.resource as DomainResource );
    this.careplan = this.resource as CarePlan;
    this.title = this.cleanString( this.careplan.title );
    this.status = this.cleanString( this.careplan.status as string );
    this.description = this.cleanString( this.careplan.description );

    if ( !this.careplan.note ){
      this.careplan.note= new Array(0);
    }

    if ( this.careplan.subject ){
      this.sofs.getReference( this.careplan.subject ).subscribe( res => this.subject=res );
    }
    if ( this.careplan.context ){
      this.sofs.getReference( this.careplan.context ).subscribe( res => this.context=res );
    }
    if ( this.careplan.basedOn ){
      this.basedOn=new Array<Resource>(0);
      this.careplan.basedOn.forEach( reference =>
        this.sofs.getReference( reference ).subscribe( res => this.basedOn.push(res) )
      );
    }
    if ( this.careplan.replaces ){
      this.replaces=new Array<Resource>(0);
      this.careplan.replaces.forEach( reference =>
        this.sofs.getReference( reference ).subscribe( res => this.replaces.push(res) )
      );
    }
    if ( this.careplan.definition ){
      this.definition=new Array<Resource>(0);
      this.careplan.definition.forEach( reference =>
        this.sofs.getReference( reference ).subscribe( res => this.definition.push(res) )
      );
    }
  }

  updateClick() {
    console.log("Click");
    this.careplan.status = CarePlanStatusEnum.ACTIVE;
    if ( this.newAnnotation.text && this.newAnnotation.text.length>0) {
      this.careplan.note.push((JSON.parse(JSON.stringify(this.newAnnotation))));
    }
    this.contextService.putContextResource( this.careplan );
  }


  annotationUpdate( annotation: Annotation ){
    // console.log(annotation);
    this.newAnnotation = annotation;
    // this.careplan.note = annotations;
  }

  cleanString( str: string ): string {
    return ( str==null ? "-": str );
  }
}
