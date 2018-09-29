import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Timing } from './Timing'

export class SupplyRequest_When      extends BackboneElement
{

   static def : string = 'SupplyRequest_When';
   code : CodeableConcept ;
   schedule : Timing ;
}
