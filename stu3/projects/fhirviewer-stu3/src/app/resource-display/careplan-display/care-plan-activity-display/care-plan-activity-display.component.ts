import {Component, Input, OnInit} from '@angular/core';
import {CarePlan_Activity, Resource, DomainResource, Reference} from "fhir2angular-stu3";
import {SmartOnFhirService} from "../../../../../../smartonfhir-stu3/src/lib/fhir-stu3/smart-on-fhir.service";
import {RequestGroupResponseResult} from "../../request-group-display/request-group-display.component";

@Component({
  selector: 'app-care-plan-activity-display',
  templateUrl: './care-plan-activity-display.component.html',
  styleUrls: ['./care-plan-activity-display.component.css']
})
export class CarePlanActivityDisplayComponent implements OnInit {

  @Input() activity : CarePlan_Activity;

  status:string = "--";
  outcomes: Resource[] = Array<Resource>(0);
  referencedResource: DomainResource = null;

  constructor( private fhirService: SmartOnFhirService ) { }

  ngOnInit() {
    this.updateValues();
  }

  updateValues(){
    if( this.activity.detail && this.activity.detail.status ) {
      this.status = this.cleanString(this.activity.detail.status);
    }
    if ( this.activity.outcomeReference ){
      this.activity.outcomeReference.forEach( outcomeReference =>{
        this.fhirService.getReference( outcomeReference ).subscribe( res =>
          this.outcomes.push(res)
        )
      });
    }
    if ( this.activity.reference ){
      this.fhirService.getReference( this.activity.reference ).subscribe( res => {
        this.referencedResource = res;
      });
    }
  }

  updateResult( rgrs: RequestGroupResponseResult[]){
    console.log("received update");
    console.log(rgrs);
    this.activity.outcomeReference = Array<Reference>(0);
    rgrs.forEach( rgr => {
      this.activity.outcomeReference.push(rgr.reference);
    });
    this.updateValues();
  }

  cleanString( str: string ): string {
    return ( str==null ? "-": str );
  }
}

