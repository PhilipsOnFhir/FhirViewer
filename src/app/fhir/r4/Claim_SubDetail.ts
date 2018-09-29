import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Money } from './Money'
import { Quantity } from './Quantity'
import { Reference } from './Reference'

export class Claim_SubDetail      extends BackboneElement
{

   static def : string = 'Claim_SubDetail';
   sequence : string ;
   revenue : CodeableConcept ;
   category : CodeableConcept ;
   service : CodeableConcept ;
   modifier : CodeableConcept [];
   programCode : CodeableConcept [];
   quantity : Quantity ;
   unitPrice : Money ;
   factor : string ;
   net : Money ;
   udi : Reference [];
}
