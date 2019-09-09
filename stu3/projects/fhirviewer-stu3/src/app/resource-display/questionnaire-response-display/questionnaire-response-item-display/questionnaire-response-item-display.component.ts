import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Questionnaire, Questionnaire_Item, QuestionnaireItemTypeEnum} from "fhir2angular-stu3";
import {QuestionnaireResponse, QuestionnaireResponse_Item, QuestionnaireResponse_Answer} from "fhir2angular-stu3";
import {MatCheckboxChange} from "@angular/material";
import {Quantity} from "../../../../../../fhir2angular-stu3/src/lib/Quantity";

@Component({
  selector: 'app-questionnaire-response-item-display',
  templateUrl: './questionnaire-response-item-display.component.html',
  styleUrls: ['./questionnaire-response-item-display.component.css']
})
export class QuestionnaireResponseItemDisplayComponent implements OnInit {
  @Input()  questionnaireResponseItem: QuestionnaireResponse_Item;
  @Input()  questionnaireItem: Questionnaire_Item;
  @Output() update  = new EventEmitter<QuestionnaireResponse_Item>();

  text = '';
  value: string | null;
  booleanValue: boolean;
  private item: Questionnaire_Item;
  questionniareResponseItem: QuestionnaireResponse_Item;
  tooltip: string = null;
  private fieldTooltip: string = null;

  constructor() { }

  ngOnInit() {
    // console.log(this.questionnaireResponseItem);
    // console.log(this.questionnaireItem);
    if ( this.questionnaireItem.prefix ) {
      this.text = this.questionnaireItem.prefix;
    }
    if ( this.questionnaireItem.text ) {
      this.text += ' ' + this.questionnaireItem.text;
    }

    if ( this.questionnaireItem.option ) {
      this.questionnaireItem.option.forEach(option => {
        if (option.valueCoding) {
          if (!option.valueCoding.display) {
            option.valueCoding.display = option.valueCoding.code;
          }
        }
      });
    }

    if( this.questionnaireItem.extension ){
      this.questionnaireItem.extension.forEach( extension => {
        if ( extension.url === "http://hl7.org/fhir/StructureDefinition/entryFormat"){
          this.tooltip = extension.valueString;
        }
      })
    }

    if ( this.questionnaireResponseItem.answer && this.questionnaireResponseItem.answer.length > 0 && this.questionnaireItem.type ) {
      const answers = this.questionnaireResponseItem.answer;
      // console.log(answers[0]);
      switch ( this.questionnaireItem.type ) {
        case QuestionnaireItemTypeEnum.DECIMAL:
          this.value = answers[0].valueDecimal;
          this.fieldTooltip = this.tooltip; this.tooltip=null;
          break;
        case QuestionnaireItemTypeEnum.TEXT:
          this.value = answers[0].valueString;
          this.fieldTooltip = this.tooltip; this.tooltip=null;
          break;
        case QuestionnaireItemTypeEnum.QUANTITY:
          this.value = answers[0].valueQuantity.value;
          this.fieldTooltip = this.tooltip; this.tooltip=null;
          break;
        case QuestionnaireItemTypeEnum.BOOLEAN:
          this.booleanValue =  answers[0].valueBoolean; //(answers[0].valueBoolean === 'true' ? true : false);
          break;
        case QuestionnaireItemTypeEnum.CHOICE:
          this.fieldTooltip = this.tooltip; this.tooltip=null;
          break;
      }
    }

  }

  stringEvent( event ) {
    console.log(event);
    console.log(this.value);
  }

  booleanEvent($event: MatCheckboxChange) {
    console.log(this.booleanValue);
    const answer = new QuestionnaireResponse_Answer();
    answer.valueBoolean = ( this.booleanValue ? true : false );
    if ( !this.questionnaireResponseItem.answer ) {
      this.questionnaireResponseItem.answer = new Array(0);
    }

    if ( this.questionnaireResponseItem.answer.length === 0 ) {
      this.questionnaireResponseItem.answer.push( answer );
    } else {
      this.questionnaireResponseItem.answer[0] = answer;
    }
    // console.log(this.questionnaireResponseItem);
    this.sendUpdate();
  }

  decimalEvent( event ) {
    // console.log(event);
    console.log(this.value);
    // console.log(event.value)
    // this.value = event.value;
    const number = Number(this.value);
    if ( isNaN(number) ) {
      console.log('not a number');
    } else if (this.questionnaireItem.type === QuestionnaireItemTypeEnum.QUANTITY ) {
      const answer = new QuestionnaireResponse_Answer();
      this.questionnaireResponseItem.answer = new Array(0);
      const quantity: Quantity = new Quantity();
      quantity.value = String( number );
      answer.valueQuantity = quantity;
      this.questionnaireResponseItem.answer.push( answer );
      // this.value = String(number);
      this.sendUpdate();
    } else {
      const answer = new QuestionnaireResponse_Answer();
      answer.valueDecimal = String(number);
      this.questionnaireResponseItem.answer = new Array(0);
      this.questionnaireResponseItem.answer.push( answer );
      // this.value = String(number);
      this.sendUpdate();
    }
  }

  sendUpdate() {
    this.update.emit(this.questionnaireResponseItem);
  }


  getQuestionnaireResponseItem(questionnaireSubItem: Questionnaire_Item) {
    let foundQri: QuestionnaireResponse_Item;
    this.questionnaireResponseItem.item
      .filter( questionnaireResponseSubItem => questionnaireResponseSubItem.linkId === questionnaireSubItem.linkId )
      .forEach( questionnaireResponseSubItem => foundQri = questionnaireResponseSubItem );
    return foundQri;
  }
}
