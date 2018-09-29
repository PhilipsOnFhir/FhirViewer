import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { Quantity } from './Quantity'

export class MedicationRequest_InitialFill      extends BackboneElement
{

   static def : string = 'MedicationRequest_InitialFill';
   quantity : Quantity ;
   duration : string ;
}
