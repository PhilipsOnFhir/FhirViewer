import { Annotation } from './Annotation'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { Period } from './Period'
import { Reference } from './Reference'
import { RequestIntentEnum } from './RequestIntentEnum'
import { RequestPriorityEnum } from './RequestPriorityEnum'
import { RequestStatusEnum } from './RequestStatusEnum'
import { Timing } from './Timing'

export class ServiceRequest      extends DomainResource
{

   static def : string = 'ServiceRequest';
   identifier : Identifier [];
   instantiates : string [];
   basedOn : Reference [];
   replaces : Reference [];
   requisition : Identifier ;
   status : RequestStatusEnum ;
   intent : RequestIntentEnum ;
   category : CodeableConcept [];
   priority : RequestPriorityEnum ;
   doNotPerform : string ;
   code : CodeableConcept ;
   orderDetail : CodeableConcept [];
   subject : Reference ;
   context : Reference ;
   occurrenceDateTime : string ;
   occurrencePeriod : Period ;
   occurrenceTiming : Timing ;
   asNeededBoolean : string ;
   asNeededCodeableConcept : CodeableConcept ;
   authoredOn : string ;
   requester : Reference ;
   performerType : CodeableConcept ;
   performer : Reference [];
   reasonCode : CodeableConcept [];
   reasonReference : Reference [];
   insurance : Reference [];
   supportingInfo : Reference [];
   specimen : Reference [];
   bodySite : CodeableConcept [];
   note : Annotation [];
   patientInstruction : string ;
   relevantHistory : Reference [];
}
