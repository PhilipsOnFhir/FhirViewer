import { Annotation } from './Annotation'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { Period } from './Period'
import { Reference } from './Reference'
import { Timing } from './Timing'

export class DeviceUseRequest      extends DomainResource
{

   static def : string = 'DeviceUseRequest';
   identifier : Identifier [];
   definition : Reference [];
   basedOn : Reference [];
   replaces : Reference [];
   requisition : Identifier ;
   status : string ;
   stage : CodeableConcept ;
   deviceReference : Reference ;
   deviceCodeableConcept : CodeableConcept ;
   subject : Reference ;
   context : Reference ;
   occurrenceDateTime : string ;
   occurrencePeriod : Period ;
   occurrenceTiming : Timing ;
   authored : string ;
   requester : Reference ;
   performerType : CodeableConcept ;
   performer : Reference ;
   reasonCode : CodeableConcept [];
   reasonReference : Reference [];
   supportingInfo : Reference [];
   note : Annotation [];
   relevantHistory : Reference [];
}
