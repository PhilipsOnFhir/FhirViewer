import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { EventCapabilityModeEnum } from './EventCapabilityModeEnum'
import { Reference } from './Reference'

export class CapabilityStatement_SupportedMessage      extends BackboneElement
{

   static def : string = 'CapabilityStatement_SupportedMessage';
   mode : EventCapabilityModeEnum ;
   definition : Reference ;
}
