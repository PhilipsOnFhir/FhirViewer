import { BackboneElement } from './BackboneElement'
import { Coding } from './Coding'
import { DomainResource } from './DomainResource'
import { Quantity } from './Quantity'
import { QuestionnaireItemOperatorEnum } from './QuestionnaireItemOperatorEnum'
import { Reference } from './Reference'

export class Questionnaire_EnableWhen      extends BackboneElement
{

   static def : string = 'Questionnaire_EnableWhen';
   question : string ;
   operator : QuestionnaireItemOperatorEnum ;
   answerBoolean : string ;
   answerDecimal : string ;
   answerInteger : string ;
   answerDate : string ;
   answerDateTime : string ;
   answerTime : string ;
   answerString : string ;
   answerCoding : Coding ;
   answerQuantity : Quantity ;
   answerReference : Reference ;
}
