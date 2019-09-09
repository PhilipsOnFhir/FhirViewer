import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { Period } from './Period'
import { Quantity } from './Quantity'

export class MedicationOrder_DispenseRequest      extends BackboneElement
{

   static def : string = 'MedicationOrder_DispenseRequest';
   validityPeriod : Period ;
   numberOfRepeatsAllowed : string ;
   quantity : Quantity ;
   expectedSupplyDuration : string ;
}
