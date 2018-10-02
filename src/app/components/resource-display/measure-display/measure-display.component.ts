import {Component, Input, OnInit} from '@angular/core';
import {DomainResource} from '../../../fhir/dstu3/DomainResource';
import {MatDatepickerInputEvent} from '@angular/material';
import {CurrentPatientService} from '../../../services/current-patient.service';
import {SmartOnFhirService} from '../../../fhir-util/smart-on-fhir.service';
import {Measure} from '../../../fhir/dstu3/Measure';
import {ContextService} from '../../../fhir-util/context.service';
import {Router} from '@angular/router';
import {MeasureReportTypeEnum} from '../../../fhir/dstu3/MeasureReportTypeEnum';

@Component({
  selector: 'app-measure-display',
  templateUrl: './measure-display.component.html',
  styleUrls: ['./measure-display.component.sass']
})
export class MeasureDisplayComponent implements OnInit {
  @Input() resource: DomainResource;

  startDate = new Date(2018, 0, 1);
  endDate   = new Date(2018, 12, 31);
  private hasCurrentPatient = false ;
  private evaluating = false;
  private measure: Measure;
  reportTypes: string[];
  reportType: string;

  constructor(private sofs: SmartOnFhirService,
              private currentPatientService: CurrentPatientService,
              private contextService: ContextService,
              private router: Router) {
    this.reportTypes = [ '',  'patient', 'patient-list', 'population' ];
  }

  ngOnInit() {
    this.measure = this.resource as Measure;
    this.hasCurrentPatient = this.currentPatientService.hasPatient();

  }

  startDateEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    console.log( event.value );
    this.startDate = event.value;
  }
  endDateEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    console.log( event.value );
    this.endDate = event.value;
  }
  reportTypeEvent($event) {
    console.log( event );
    console.log(this.reportType);
    if ( !this.currentPatientService.hasPatient() && this.reportType === 'patient' ){
      this.reportType = '';
    }
  }

  evaluate() {
    let parameters = '';
    parameters += '?periodStart=' + this.startDate.getFullYear() + '-' + this.startDate.getMonth() + '-' + this.startDate.getDay()
      + '&periodEnd='  + this.endDate.getFullYear() + '-' + this.endDate.getMonth() + '-' + this.endDate.getDay()
      ;
    if ( this.reportType !== '' ) {
      parameters += '&reportType=' + this.reportType;
      if ( this.reportType === 'patient' ) {
        parameters += '&patient=Patient/' + this.currentPatientService.getPatient().id;
      }
    }
    this.evaluating = true;
    this.sofs.doOperation( `Measure/${this.measure.id}`, 'evaluate-measure', parameters)
      .subscribe( res => {
        console.log('evaluate-measure:');
        console.log(res);
        const cp = this.contextService.postContextResource(res);
        this.router.navigate(['fhir', res.resourceType, cp.id], { queryParamsHandling: 'preserve' });
      }, err => {
        console.log( err );
        // this.errorStr = JSON.stringify(err);
        this.evaluating = false;
      });
  }
}
