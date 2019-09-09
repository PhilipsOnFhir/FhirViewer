import { DataRequirement } from './DataRequirement'
import { DomainResource } from './DomainResource'
import { Element } from './Element'
import { Reference } from './Reference'
import { Timing } from './Timing'
import { TriggerTypeEnum } from './TriggerTypeEnum'

export class TriggerDefinition      extends Element
{

   static def : string = 'TriggerDefinition';
   type : TriggerTypeEnum ;
   eventName : string ;
   eventTimingTiming : Timing ;
   eventTimingReference : Reference ;
   eventTimingDate : string ;
   eventTimingDateTime : string ;
   eventData : DataRequirement ;
}
