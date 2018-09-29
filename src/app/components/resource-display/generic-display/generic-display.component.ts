import {Component, Input, OnInit} from '@angular/core';
import {DomainResource} from "../../../fhir/dstu3/DomainResource";

@Component({
  selector: 'app-generic-display',
  templateUrl: './generic-display.component.html',
  styleUrls: ['./generic-display.component.sass']
})
export class GenericDisplayComponent implements OnInit {
  @Input() resource: DomainResource;
  @Input() library: boolean

  constructor() { }

  ngOnInit() {
    // console.log("------------------------------------------------------------")
    // console.log(this.library);
    if ( !this.library ){
      this.library=false;
    }
  }

  getJson():string {
    return JSON.stringify(this.resource,null,2);
  }
}
