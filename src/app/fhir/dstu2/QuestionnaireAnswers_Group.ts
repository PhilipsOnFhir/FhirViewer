import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { QuestionnaireAnswers_Question } from './QuestionnaireAnswers_Question'
import { Reference } from './Reference'

export class QuestionnaireAnswers_Group      extends BackboneElement
{

   static def : string = 'QuestionnaireAnswers_Group';
   linkId : string ;
   title : string ;
   text : string ;
   subject : Reference ;
   group : QuestionnaireAnswers_Group [];
   question : QuestionnaireAnswers_Question [];
}
