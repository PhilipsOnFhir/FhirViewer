import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { UDIEntryTypeEnum } from './UDIEntryTypeEnum'

export class Device_Udi      extends BackboneElement
{

   static def : string = 'Device_Udi';
   deviceIdentifier : string ;
   name : string ;
   jurisdiction : string ;
   carrierHRF : string ;
   carrierAIDC : string ;
   issuer : string ;
   entryType : UDIEntryTypeEnum ;
}
