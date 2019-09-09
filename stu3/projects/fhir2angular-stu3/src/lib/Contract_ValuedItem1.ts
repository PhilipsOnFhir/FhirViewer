import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { Quantity } from './Quantity'
import { Reference } from './Reference'

export class Contract_ValuedItem1      extends BackboneElement
{

   static def : string = 'Contract_ValuedItem1';
   entityCodeableConcept : CodeableConcept ;
   entityReference : Reference ;
   identifier : Identifier ;
   effectiveTime : string ;
   quantity : Quantity ;
   unitPrice : string ;
   factor : string ;
   points : string ;
   net : string ;
}
