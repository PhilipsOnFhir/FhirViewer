import { BackboneElement } from './BackboneElement'
import { Coding } from './Coding'
import { DomainResource } from './DomainResource'
import { EventCapabilityModeEnum } from './EventCapabilityModeEnum'
import { MessageSignificanceCategoryEnum } from './MessageSignificanceCategoryEnum'
import { Reference } from './Reference'
import { ResourceTypeEnum } from './ResourceTypeEnum'

export class CapabilityStatement_Event      extends BackboneElement
{

   static def : string = 'CapabilityStatement_Event';
   code : Coding ;
   category : MessageSignificanceCategoryEnum ;
   mode : EventCapabilityModeEnum ;
   focus : ResourceTypeEnum ;
   request : Reference ;
   response : Reference ;
   documentation : string ;
}
