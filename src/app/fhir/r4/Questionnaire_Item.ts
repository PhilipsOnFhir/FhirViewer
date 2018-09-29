import { BackboneElement } from './BackboneElement'
import { Coding } from './Coding'
import { DomainResource } from './DomainResource'
import { EnableWhenBehaviorEnum } from './EnableWhenBehaviorEnum'
import { QuestionnaireItemTypeEnum } from './QuestionnaireItemTypeEnum'
import { Questionnaire_EnableWhen } from './Questionnaire_EnableWhen'
import { Questionnaire_Initial } from './Questionnaire_Initial'
import { Questionnaire_Option } from './Questionnaire_Option'

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
   enableBehavior : EnableWhenBehaviorEnum ;
   required : string ;
   repeats : string ;
   readOnly : string ;
   maxLength : string ;
   options : string ;
   option : Questionnaire_Option [];
   initial : Questionnaire_Initial [];
   item : Questionnaire_Item [];
}
