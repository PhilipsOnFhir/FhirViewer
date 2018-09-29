import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { Money } from './Money'
import { Reference } from './Reference'
import { SimpleQuantity } from './SimpleQuantity'

export class Contract_ValuedItem1      extends BackboneElement
{

   static def : string = 'Contract_ValuedItem1';
   entityCodeableConcept : CodeableConcept ;
   entityReference : Reference ;
   identifier : Identifier ;
   effectiveTime : string ;
   quantity : SimpleQuantity ;
   unitPrice : Money ;
   factor : string ;
   points : string ;
   net : Money ;
}
