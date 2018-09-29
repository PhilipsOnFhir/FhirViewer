import { Attachment } from './Attachment'
import { BackboneElement } from './BackboneElement'
import { Coding } from './Coding'
import { DomainResource } from './DomainResource'
import { Quantity } from './Quantity'
import { QuestionnaireResponse_Group } from './QuestionnaireResponse_Group'
import { Reference } from './Reference'

export class QuestionnaireResponse_Answer      extends BackboneElement
{

   static def : string = 'QuestionnaireResponse_Answer';
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
   valueQuantity : Quantity ;
   valueReference : Reference ;
   group : QuestionnaireResponse_Group [];
}
