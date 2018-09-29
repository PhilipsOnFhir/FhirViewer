import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Quantity } from './Quantity'
import { Range } from './Range'

export class DeviceRequest_Parameter      extends BackboneElement
{

   static def : string = 'DeviceRequest_Parameter';
   code : CodeableConcept ;
   valueCodeableConcept : CodeableConcept ;
   valueQuantity : Quantity ;
   valueRange : Range ;
   valueBoolean : string ;
}
