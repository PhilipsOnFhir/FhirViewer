import { Attachment } from './Attachment'
import { BackboneElement } from './BackboneElement'
import { Coding } from './Coding'
import { DomainResource } from './DomainResource'
import { QuestionnaireAnswers_Group } from './QuestionnaireAnswers_Group'
import { Reference } from './Reference'

export class QuestionnaireAnswers_Answer      extends BackboneElement
{

   static def : string = 'QuestionnaireAnswers_Answer';
   valueBoolean : string ;
   valueDecimal : string ;
   valueInteger : string ;
   valueDate : string ;
   valueDateTime : string ;
   valueInstant : string ;
   valueTime : string ;
   valueString : string ;
   valueUri : string ;
   valueAttachment : Attachment ;
   valueCoding : Coding ;
   valueMeasuredQuantity : string ;
   valueReference : Reference ;
   group : QuestionnaireAnswers_Group [];
}
