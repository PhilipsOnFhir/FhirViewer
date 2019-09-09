import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Quantity } from './Quantity'
import { Reference } from './Reference'

export class SupplyRequest_OrderedItem      extends BackboneElement
{

   static def : string = 'SupplyRequest_OrderedItem';
   quantity : Quantity ;
   itemCodeableConcept : CodeableConcept ;
   itemReference : Reference ;
}
