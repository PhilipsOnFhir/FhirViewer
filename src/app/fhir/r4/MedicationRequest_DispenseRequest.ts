import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { MedicationRequest_InitialFill } from './MedicationRequest_InitialFill'
import { Period } from './Period'
import { Quantity } from './Quantity'
import { Reference } from './Reference'

export class MedicationRequest_DispenseRequest      extends BackboneElement
{

   static def : string = 'MedicationRequest_DispenseRequest';
   initialFill : MedicationRequest_InitialFill ;
   dispenseInterval : string ;
   validityPeriod : Period ;
   numberOfRepeatsAllowed : string ;
   quantity : Quantity ;
   expectedSupplyDuration : string ;
   performer : Reference ;
}
