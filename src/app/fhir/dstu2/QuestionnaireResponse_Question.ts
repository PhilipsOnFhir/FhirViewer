import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { QuestionnaireResponse_Answer } from './QuestionnaireResponse_Answer'

export class QuestionnaireResponse_Question      extends BackboneElement
{

   static def : string = 'QuestionnaireResponse_Question';
   linkId : string ;
   text : string ;
   answer : QuestionnaireResponse_Answer [];
}
