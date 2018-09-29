import {Component, Input, OnInit} from '@angular/core';
import {Resource} from "../../../fhir/dstu3/Resource";
import {Questionnaire} from "../../../fhir/dstu3/Questionnaire";
import {QuestionnaireResponse} from "../../../fhir/dstu3/QuestionnaireResponse";
import {Reference} from "../../../fhir/dstu3/Reference";
import {QuestionnaireResponse_Item} from "../../../fhir/dstu3/QuestionnaireResponse_Item";
import {Questionnaire_Item} from "../../../fhir/dstu3/Questionnaire_Item";
import {QuestionnaireResponse_Answer} from "../../../fhir/dstu3/QuestionnaireResponse_Answer";
import {QuestionnaireResponseStatusEnum} from "../../../fhir/dstu3/QuestionnaireResponseStatusEnum";
import {ContextService} from "../../../fhir-util/context.service";
import {Router} from "@angular/router";
import {DomainResource} from "../../../fhir/dstu3/DomainResource";
import {CurrentPatientService} from "../../../services/current-patient.service";

@Component({
  selector: 'app-questionnaire-display',
  templateUrl: './questionnaire-display.component.html',
  styleUrls: ['./questionnaire-display.component.sass']
})
export class QuestionnaireDisplayComponent implements  OnInit {

  @Input()  resource: Resource|null;
  questionnaire : Questionnaire|null;
  title: string | "";

  constructor( private contextService: ContextService, private router: Router, private currentPatient : CurrentPatientService ) {

  }

  ngOnInit(): void {
    this.questionnaire = this.resource as Questionnaire;
    this.title = ( this.questionnaire.title && this.questionnaire.title.length>0 ? this.questionnaire.title : this.questionnaire.id );
    this.createQuestionnaireResponse();
  }

  createQuestionnaireResponse() : QuestionnaireResponse{
    let questionnaireResponse = new QuestionnaireResponse();
    questionnaireResponse.resourceType  = "QuestionnaireResponse";
    questionnaireResponse.questionnaire = new Reference();
    questionnaireResponse.questionnaire.reference = "Questionnaire/"+this.questionnaire.id;

    questionnaireResponse.status = QuestionnaireResponseStatusEnum.IN_PROGRESS;
    // questionnaireResponse.authored = String(Date.now());

    if ( this.currentPatient.hasPatient() ){
      let reference = new Reference();
      reference.reference = "Patient/"+this.currentPatient.getPatient().id;
      questionnaireResponse.subject = reference;
    }

    questionnaireResponse.item = new Array<QuestionnaireResponse_Item>(0);
    this.questionnaire.item.forEach( item => {
      questionnaireResponse.item.push( this.addQuestionnaireResponseItem( item ) );
    });
    console.log("----------------------------------------------------------------------------");
    console.log(questionnaireResponse);
    return questionnaireResponse;
  }

  private addQuestionnaireResponseItem( item: Questionnaire_Item) : QuestionnaireResponse_Item {
    let questionnaireResponseItem: QuestionnaireResponse_Item = new QuestionnaireResponse_Item();
    questionnaireResponseItem.linkId = item.linkId;
    questionnaireResponseItem.text   = item.text;
    questionnaireResponseItem.answer = new Array<QuestionnaireResponse_Answer>(0);
    if ( item.initialString ){
      let answer = new QuestionnaireResponse_Answer();
      answer.valueString = item.initialString;
      questionnaireResponseItem.answer.push( answer )
    }
    questionnaireResponseItem.item = new Array<QuestionnaireResponse_Item>(0);
    if ( item.item ) {
      item.item.forEach(subItem => {
        questionnaireResponseItem.item.push(this.addQuestionnaireResponseItem(subItem));
      });
    }
    //    questionnaireResponseItem.answer
    // questionnaireItem.
    return questionnaireResponseItem;
  }

  fillIn() {
    let qr : QuestionnaireResponse = this.createQuestionnaireResponse();
    let qrPosted : DomainResource = this.contextService.postContextResource(qr);
    console.log( qrPosted );
    this.router.navigate(["fhir", QuestionnaireResponse.def, qrPosted.id], { queryParamsHandling: 'preserve' });
  }
}
