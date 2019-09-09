import { Annotation } from './Annotation'
import { CodeableConcept } from './CodeableConcept'
import { DeviceRequest_Requester } from './DeviceRequest_Requester'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { Period } from './Period'
import { Reference } from './Reference'
import { RequestPriorityEnum } from './RequestPriorityEnum'
import { RequestStatusEnum } from './RequestStatusEnum'
import { Timing } from './Timing'

export class DeviceRequest      extends DomainResource
{

   static def : string = 'DeviceRequest';
   identifier : Identifier [];
   definition : Reference [];
   basedOn : Reference [];
   priorRequest : Reference [];
   groupIdentifier : Identifier ;
   status : RequestStatusEnum ;
   intent : CodeableConcept ;
   priority : RequestPriorityEnum ;
   codeReference : Reference ;
   codeCodeableConcept : CodeableConcept ;
   subject : Reference ;
   context : Reference ;
   occurrenceDateTime : string ;
   occurrencePeriod : Period ;
   occurrenceTiming : Timing ;
   authoredOn : string ;
   requester : DeviceRequest_Requester ;
   performerType : CodeableConcept ;
   performer : Reference ;
   reasonCode : CodeableConcept [];
   reasonReference : Reference [];
   supportingInfo : Reference [];
   note : Annotation [];
   relevantHistory : Reference [];
}
