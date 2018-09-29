import { DomainResource } from './DomainResource'
import { Reference } from './Reference'

export class ItemInstance      extends DomainResource
{

   static def : string = 'ItemInstance';
   count : string ;
   location : Reference ;
   subject : Reference ;
   manufactureDate : string ;
   expiryDate : string ;
   currentSWVersion : string ;
   lotNumber : string ;
   serialNumber : string ;
   carrierAIDC : string ;
   carrierHRF : string ;
}
