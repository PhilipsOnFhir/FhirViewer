import {Component, Input, OnInit} from '@angular/core';
import {Resource} from '../../../fhir/dstu3/Resource';
import {OperationOutcome} from '../../../fhir/dstu3/OperationOutcome';

@Component({
  selector: 'app-operation-outcome-display',
  templateUrl: './operation-outcome-display.component.html',
  styleUrls: ['./operation-outcome-display.component.sass']
})
export class OperationOutcomeDisplayComponent implements OnInit {
  @Input() resource: Resource;
  operationOutcome: OperationOutcome;

  constructor() { }

  ngOnInit() {
    this.operationOutcome = this.resource as OperationOutcome;
  }

}

