import {Component, Input, OnInit} from '@angular/core';
import {DomainResource} from "../../fhir/dstu3/DomainResource";
import {ResourceUtil} from "../../fhir-util/dstu3-util/resource-util";

@Component({
  selector: 'app-resource-accordian',
  templateUrl: './resource-accordian.component.html',
  styleUrls: ['./resource-accordian.component.sass']
})
export class ResourceAccordianComponent implements OnInit {
  @Input()  resource : DomainResource;
  private summary: string;

  constructor() {

  }

  ngOnInit() {
    this.summary = ResourceUtil.getSummary( this.resource );
  }

}
