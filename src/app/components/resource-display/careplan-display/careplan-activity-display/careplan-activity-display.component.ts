import {Component, Input, OnInit} from '@angular/core';
import {Dstu3Util} from "../../../../fhir-util/dstu3-util/dstu3-util";
import {Resource} from "../../../../fhir/dstu3/Resource";
import {CarePlan_Activity} from "../../../../fhir/dstu3/CarePlan_Activity";
import {DomainResource} from "../../../../fhir/dstu3/DomainResource";
import {Reference} from "../../../../fhir/dstu3/Reference";
import {RequestGroupResponseResult} from "../../request-group-display/request-group-display.component";
import {SmartOnFhirService} from "../../../../fhir-util/smart-on-fhir.service";

@Component({
  selector: 'app-careplan-activity-display',
  templateUrl: './careplan-activity-display.component.html',
  styleUrls: ['./careplan-activity-display.component.sass']
})
export class CareplanActivityDisplayComponent implements OnInit {

  @Input()  activity : CarePlan_Activity;

  status:string = "--";
  outcomes: Resource[] = Array<Resource>(0);
  referencedResource: DomainResource = null;

  constructor( private fhirService: SmartOnFhirService ) { }

  ngOnInit() {
    this.updateValues();
  }

  updateValues(){
    if( this.activity.detail && this.activity.detail.status ) {
      this.status = Dstu3Util.cleanString(this.activity.detail.status);
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

}
