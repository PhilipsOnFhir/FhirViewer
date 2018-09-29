import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { Period } from './Period'
import { Quantity } from './Quantity'
import { Reference } from './Reference'

export class MedicationRequest_DispenseRequest      extends BackboneElement
{

   static def : string = 'MedicationRequest_DispenseRequest';
   validityPeriod : Period ;
   numberOfRepeatsAllowed : string ;
   quantity : Quantity ;
   expectedSupplyDuration : string ;
   performer : Reference ;
}
