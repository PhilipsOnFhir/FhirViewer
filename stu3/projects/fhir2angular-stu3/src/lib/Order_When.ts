import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Timing } from './Timing'

export class Order_When      extends BackboneElement
{

   static def : string = 'Order_When';
   code : CodeableConcept ;
   schedule : Timing ;
}
