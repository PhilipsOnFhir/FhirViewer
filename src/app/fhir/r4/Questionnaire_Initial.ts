import { Attachment } from './Attachment'
import { BackboneElement } from './BackboneElement'
import { Coding } from './Coding'
import { DomainResource } from './DomainResource'
import { Quantity } from './Quantity'
import { Reference } from './Reference'

export class Questionnaire_Initial      extends BackboneElement
{

   static def : string = 'Questionnaire_Initial';
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
}
