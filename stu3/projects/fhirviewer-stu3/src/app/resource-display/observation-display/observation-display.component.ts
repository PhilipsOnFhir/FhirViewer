import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Resource, Observation} from "fhir2angular-stu3";

@Component({
  selector: 'app-observation-display',
  templateUrl: './observation-display.component.html',
  styleUrls: ['./observation-display.component.css']
})
export class ObservationDisplayComponent implements OnInit {
  @Input()  resource;
  @Input()  format = "nice";

  name: string;
  private observation: Observation;
  private summary: string = "";

  constructor() { }

  ngOnInit() {
    this.observation = this.resource as Observation;
    console.log(this.observation);
    if ( this.observation.code ){
      if ( this.observation.code.coding){
        if ( this.observation.code.coding.length>0){
          if ( this.observation.code.coding[0].display){
            this.summary+=this.observation.code.coding[0].display+" - ";
          } else if ( this.observation.code.coding[0].code){
            this.summary+=this.observation.code.coding[0].code+" - ";
          }
        }
      }
    }

    if ( this.observation.valueQuantity ){
      if ( this.observation.valueQuantity.value) {
        this.summary += this.observation.valueQuantity.value + " - ";
      }
      if ( this.observation.valueQuantity.unit) {
        this.summary += this.observation.valueQuantity.unit;
      }
    }
  }

}
