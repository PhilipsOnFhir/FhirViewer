import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CancelButtonEvent} from "../../../cancel-button/cancel-button.component";
import {Questionnaire_Item} from "../../../../fhir/dstu3/Questionnaire_Item";
import {QuestionnaireResponse_Item} from "../../../../fhir/dstu3/QuestionnaireResponse_Item";
import {QuestionnaireResponse_Answer} from "../../../../fhir/dstu3/QuestionnaireResponse_Answer";
import {RequestGroupResponseResult} from "../../request-group-display/request-group-display.component";
import {QuestionnaireItemTypeEnum} from "../../../../fhir/dstu3/QuestionnaireItemTypeEnum";
import {Quantity} from "../../../../fhir/dstu3/Quantity";

@Component({
  selector: 'app-questionnaire-display-item',
  templateUrl: './questionnaire-display-item.component.html',
  styleUrls: ['./questionnaire-display-item.component.sass']
})
export class QuestionnaireDisplayItemComponent implements OnInit {

  @Input()  questionnaireResponseItem: QuestionnaireResponse_Item;
  @Input()  questionnaireItem: Questionnaire_Item;
  @Output() update  = new EventEmitter<QuestionnaireResponse_Item>();

  private text: string = "";
  private value: string | null;
  private item: Questionnaire_Item;
  private questionniareResponseItem: QuestionnaireResponse_Item;

  constructor() { }

  ngOnInit() {
    if ( this.questionnaireItem.prefix ){
      this.text = this.questionnaireItem.prefix;
    }
    if ( this.questionnaireItem.text ){
      this.text += " " + this.questionnaireItem.text;
    }

    if ( this.questionnaireResponseItem.answer && this.questionnaireResponseItem.answer.length>0 && this.questionnaireItem.type ){
      let answers = this.questionnaireResponseItem.answer;
      console.log(answers[0])
      switch( this.questionnaireItem.type ){
        case QuestionnaireItemTypeEnum.DECIMAL:
          this.value = answers[0].valueDecimal;
          break;
        case QuestionnaireItemTypeEnum.TEXT:
          this.value = answers[0].valueString;
          break;
        case QuestionnaireItemTypeEnum.QUANTITY:
          this.value = answers[0].valueQuantity.value;
          break;
      }

    }
  }

  stringEvent( event: CancelButtonEvent){
    console.log(event);
    console.log(this.value);
  }

  decimalEvent( event: CancelButtonEvent){
    // console.log(event);
    console.log(this.value);
    // console.log(event.value)
    // this.value = event.value;
    let number = Number(this.value);
    if ( isNaN(number) ){
      console.log("not a number");
    }
    else if (this.questionnaireItem.type == QuestionnaireItemTypeEnum.QUANTITY ){
      let answer = new QuestionnaireResponse_Answer();
      this.questionnaireResponseItem.answer = new Array(0);
      let quantity: Quantity = new Quantity();
      quantity.value = String( number );
      answer.valueQuantity = quantity;
      this.questionnaireResponseItem.answer.push( answer );
      // this.value = String(number);
      this.sendUpdate();
    } else {
      let answer = new QuestionnaireResponse_Answer();
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
}
