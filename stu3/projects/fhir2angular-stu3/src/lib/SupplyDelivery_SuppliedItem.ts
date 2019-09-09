import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Quantity } from './Quantity'
import { Reference } from './Reference'

export class SupplyDelivery_SuppliedItem      extends BackboneElement
{

   static def : string = 'SupplyDelivery_SuppliedItem';
   quantity : Quantity ;
   itemCodeableConcept : CodeableConcept ;
   itemReference : Reference ;
}
