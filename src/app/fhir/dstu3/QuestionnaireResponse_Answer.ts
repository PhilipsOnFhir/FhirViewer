import { Attachment } from './Attachment'
import { BackboneElement } from './BackboneElement'
import { Coding } from './Coding'
import { DomainResource } from './DomainResource'
import { Quantity } from './Quantity'
import { QuestionnaireResponse_Item } from './QuestionnaireResponse_Item'
import { Reference } from './Reference'

export class QuestionnaireResponse_Answer      extends BackboneElement
{

   static def : string = 'QuestionnaireResponse_Answer';
   valueBoolean : string ;
   valueDecimal : string ;
   valueInteger : string ;
   valueDate : string ;
   valueDateTime : string ;
   valueTime : string ;
   valueString : string ;
   valueUri : string ;
   valueAttachment : Attachment ;
   valueCoding : Coding ;
   valueQuantity : Quantity ;
   valueReference : Reference ;
   item : QuestionnaireResponse_Item [];
}
