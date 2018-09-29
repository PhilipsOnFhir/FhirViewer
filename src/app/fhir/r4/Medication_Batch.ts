import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'

export class Medication_Batch      extends BackboneElement
{

   static def : string = 'Medication_Batch';
   lotNumber : string ;
   expirationDate : string ;
   serialNumber : string ;
}
