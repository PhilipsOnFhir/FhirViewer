import { Attachment } from './Attachment'
import { BackboneElement } from './BackboneElement'
import { Coding } from './Coding'
import { DomainResource } from './DomainResource'
import { Quantity } from './Quantity'
import { QuestionnaireItemTypeEnum } from './QuestionnaireItemTypeEnum'
import { Questionnaire_EnableWhen } from './Questionnaire_EnableWhen'
import { Questionnaire_Option } from './Questionnaire_Option'
import { Reference } from './Reference'

export class Questionnaire_Item      extends BackboneElement
{

   static def : string = 'Questionnaire_Item';
   linkId : string ;
   definition : string ;
   code : Coding [];
   prefix : string ;
   text : string ;
   type : QuestionnaireItemTypeEnum ;
   enableWhen : Questionnaire_EnableWhen [];
   required : string ;
   repeats : string ;
   readOnly : string ;
   maxLength : string ;
   options : Reference ;
   option : Questionnaire_Option [];
   initialBoolean : string ;
   initialDecimal : string ;
   initialInteger : string ;
   initialDate : string ;
   initialDateTime : string ;
   initialTime : string ;
   initialString : string ;
   initialUri : string ;
   initialAttachment : Attachment ;
   initialCoding : Coding ;
   initialQuantity : Quantity ;
   initialReference : Reference ;
   item : Questionnaire_Item [];
}
