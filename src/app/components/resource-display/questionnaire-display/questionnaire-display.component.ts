import {Component, Input, OnInit} from '@angular/core';
import {Resource} from '../../../fhir/dstu3/Resource';
import {Questionnaire} from '../../../fhir/dstu3/Questionnaire';
import {QuestionnaireResponse} from '../../../fhir/dstu3/QuestionnaireResponse';
import {Reference} from '../../../fhir/dstu3/Reference';
import {QuestionnaireResponse_Item} from '../../../fhir/dstu3/QuestionnaireResponse_Item';
import {Questionnaire_Item} from '../../../fhir/dstu3/Questionnaire_Item';
import {QuestionnaireResponse_Answer} from '../../../fhir/dstu3/QuestionnaireResponse_Answer';
import {QuestionnaireResponseStatusEnum} from '../../../fhir/dstu3/QuestionnaireResponseStatusEnum';
import {ContextService} from '../../../fhir-util/context.service';
import {Router} from '@angular/router';
import {DomainResource} from '../../../fhir/dstu3/DomainResource';
import {CurrentPatientService} from '../../../services/current-patient.service';
import {QuestionnaireUtil} from '../../../fhir-util/dstu3-util/questionaire-util';

@Component({
  selector: 'app-questionnaire-display',
  templateUrl: './questionnaire-display.component.html',
  styleUrls: ['./questionnaire-display.component.sass']
})
export class QuestionnaireDisplayComponent implements  OnInit {

  @Input()  resource: Resource|null;
  questionnaire: Questionnaire|null;
  title: string | '';

  constructor( private contextService: ContextService, private router: Router, private currentPatient: CurrentPatientService ) {

  }

  ngOnInit(): void {
    this.questionnaire = this.resource as Questionnaire;
    this.title = ( this.questionnaire.title && this.questionnaire.title.length > 0 ? this.questionnaire.title : this.questionnaire.id );
  }



  fillIn() {
    const qr: QuestionnaireResponse =  QuestionnaireUtil.createQuestionnaireResponse( this.currentPatient, this.questionnaire );
    const qrPosted: DomainResource = this.contextService.postContextResource(qr);
    console.log( qrPosted );
    this.router.navigate(['fhir', QuestionnaireResponse.def, qrPosted.id], { queryParamsHandling: 'preserve' });
  }
}
