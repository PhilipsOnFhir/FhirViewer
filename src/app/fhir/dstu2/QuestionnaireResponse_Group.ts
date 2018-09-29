import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { QuestionnaireResponse_Question } from './QuestionnaireResponse_Question'
import { Reference } from './Reference'

export class QuestionnaireResponse_Group      extends BackboneElement
{

   static def : string = 'QuestionnaireResponse_Group';
   linkId : string ;
   title : string ;
   text : string ;
   subject : Reference ;
   group : QuestionnaireResponse_Group [];
   question : QuestionnaireResponse_Question [];
}
