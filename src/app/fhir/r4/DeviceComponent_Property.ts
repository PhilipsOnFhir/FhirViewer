import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Quantity } from './Quantity'

export class DeviceComponent_Property      extends BackboneElement
{

   static def : string = 'DeviceComponent_Property';
   type : CodeableConcept ;
   valueQuantity : Quantity [];
   valueCode : CodeableConcept [];
}
