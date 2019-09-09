import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DomainResource} from "fhir2angular-stu3";
import {Resource} from "../../../../../fhir2angular-stu3/src/lib/Resource";

@Component({
  selector: 'app-generic-display',
  templateUrl: './generic-display.component.html',
  styleUrls: ['./generic-display.component.css']
})
export class GenericDisplayComponent implements OnInit {
  @Input() resource: DomainResource;
  @Output() result = new EventEmitter<Resource>();

  constructor() { }

  ngOnInit() {
  }

  openResult( resource) {
    console.log( resource);
    this.result.emit(resource );
  }
}
