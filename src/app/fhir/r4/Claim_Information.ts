import { Attachment } from './Attachment'
import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Period } from './Period'
import { Quantity } from './Quantity'
import { Reference } from './Reference'

export class Claim_Information      extends BackboneElement
{

   static def : string = 'Claim_Information';
   sequence : string ;
   category : CodeableConcept ;
   code : CodeableConcept ;
   timingDate : string ;
   timingPeriod : Period ;
   valueBoolean : string ;
   valueString : string ;
   valueQuantity : Quantity ;
   valueAttachment : Attachment ;
   valueReference : Reference ;
   reason : CodeableConcept ;
}
