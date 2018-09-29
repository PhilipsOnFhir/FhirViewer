import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { QuestionnaireResponse_Answer } from './QuestionnaireResponse_Answer'
import { Reference } from './Reference'

export class QuestionnaireResponse_Item      extends BackboneElement
{

   static def : string = 'QuestionnaireResponse_Item';
   linkId : string ;
   definition : string ;
   text : string ;
   subject : Reference ;
   answer : QuestionnaireResponse_Answer [];
   item : QuestionnaireResponse_Item [];
}
