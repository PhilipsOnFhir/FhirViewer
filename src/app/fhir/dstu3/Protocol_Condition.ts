import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Quantity } from './Quantity'
import { Range } from './Range'

export class Protocol_Condition      extends BackboneElement
{

   static def : string = 'Protocol_Condition';
   type : CodeableConcept ;
   valueCodeableConcept : CodeableConcept ;
   valueBoolean : string ;
   valueQuantity : Quantity ;
   valueRange : Range ;
}
