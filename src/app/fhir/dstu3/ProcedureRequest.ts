import { Annotation } from './Annotation'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { Period } from './Period'
import { ProcedureRequest_Requester } from './ProcedureRequest_Requester'
import { Reference } from './Reference'
import { RequestIntentEnum } from './RequestIntentEnum'
import { RequestPriorityEnum } from './RequestPriorityEnum'
import { RequestStatusEnum } from './RequestStatusEnum'
import { Timing } from './Timing'

export class ProcedureRequest      extends DomainResource
{

   static def : string = 'ProcedureRequest';
   identifier : Identifier [];
   definition : Reference [];
   basedOn : Reference [];
   replaces : Reference [];
   requisition : Identifier ;
   status : RequestStatusEnum ;
   intent : RequestIntentEnum ;
   priority : RequestPriorityEnum ;
   doNotPerform : string ;
   category : CodeableConcept [];
   code : CodeableConcept ;
   subject : Reference ;
   context : Reference ;
   occurrenceDateTime : string ;
   occurrencePeriod : Period ;
   occurrenceTiming : Timing ;
   asNeededBoolean : string ;
   asNeededCodeableConcept : CodeableConcept ;
   authoredOn : string ;
   requester : ProcedureRequest_Requester ;
   performerType : CodeableConcept ;
   performer : Reference ;
   reasonCode : CodeableConcept [];
   reasonReference : Reference [];
   supportingInfo : Reference [];
   specimen : Reference [];
   bodySite : CodeableConcept [];
   note : Annotation [];
   relevantHistory : Reference [];
}
