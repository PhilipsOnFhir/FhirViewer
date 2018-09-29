import { BackboneElement } from './BackboneElement'
import { CapabilityStatement_Endpoint } from './CapabilityStatement_Endpoint'
import { CapabilityStatement_SupportedMessage } from './CapabilityStatement_SupportedMessage'
import { DomainResource } from './DomainResource'

export class CapabilityStatement_Messaging      extends BackboneElement
{

   static def : string = 'CapabilityStatement_Messaging';
   endpoint : CapabilityStatement_Endpoint [];
   reliableCache : string ;
   documentation : string ;
   supportedMessage : CapabilityStatement_SupportedMessage [];
}
