import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { QuestionnaireAnswers_Answer } from './QuestionnaireAnswers_Answer'

export class QuestionnaireAnswers_Question      extends BackboneElement
{

   static def : string = 'QuestionnaireAnswers_Question';
   linkId : string ;
   text : string ;
   answer : QuestionnaireAnswers_Answer [];
}
