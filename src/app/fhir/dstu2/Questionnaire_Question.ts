import { AnswerFormatEnum } from './AnswerFormatEnum'
import { BackboneElement } from './BackboneElement'
import { Coding } from './Coding'
import { DomainResource } from './DomainResource'
import { Questionnaire_Group } from './Questionnaire_Group'
import { Reference } from './Reference'

export class Questionnaire_Question      extends BackboneElement
{

   static def : string = 'Questionnaire_Question';
   linkId : string ;
   concept : Coding [];
   text : string ;
   type : AnswerFormatEnum ;
   required : string ;
   repeats : string ;
   options : Reference ;
   option : Coding [];
   group : Questionnaire_Group [];
}
