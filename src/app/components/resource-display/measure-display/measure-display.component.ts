import {Component, Input, OnInit} from '@angular/core';
import {DomainResource} from "../../../fhir/dstu3/DomainResource";

@Component({
  selector: 'app-measure-display',
  templateUrl: './measure-display.component.html',
  styleUrls: ['./measure-display.component.sass']
})
export class MeasureDisplayComponent implements OnInit {
  @Input() resource: DomainResource;

  constructor() { }

  ngOnInit() {
  }

}
