import { CodeableConcept } from './CodeableConcept'
import { DeviceUseRequestPriorityEnum } from './DeviceUseRequestPriorityEnum'
import { DeviceUseRequestStatusEnum } from './DeviceUseRequestStatusEnum'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { Period } from './Period'
import { Reference } from './Reference'
import { Timing } from './Timing'

export class DeviceUseRequest      extends DomainResource
{

   static def : string = 'DeviceUseRequest';
   bodySiteCodeableConcept : CodeableConcept ;
   bodySiteReference : Reference ;
   status : DeviceUseRequestStatusEnum ;
   device : Reference ;
   encounter : Reference ;
   identifier : Identifier [];
   indication : CodeableConcept [];
   notes : string [];
   prnReason : CodeableConcept [];
   orderedOn : string ;
   recordedOn : string ;
   subject : Reference ;
   timingTiming : Timing ;
   timingPeriod : Period ;
   timingDateTime : string ;
   priority : DeviceUseRequestPriorityEnum ;
}
