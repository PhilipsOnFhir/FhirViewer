import { Annotation } from './Annotation'
import { CodeableConcept } from './CodeableConcept'
import { CommunicationRequest_Payload } from './CommunicationRequest_Payload'
import { CommunicationRequest_Requester } from './CommunicationRequest_Requester'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { Period } from './Period'
import { Reference } from './Reference'
import { RequestPriorityEnum } from './RequestPriorityEnum'
import { RequestStatusEnum } from './RequestStatusEnum'

export class CommunicationRequest      extends DomainResource
{

   static def : string = 'CommunicationRequest';
   identifier : Identifier [];
   basedOn : Reference [];
   replaces : Reference [];
   groupIdentifier : Identifier ;
   status : RequestStatusEnum ;
   category : CodeableConcept [];
   priority : RequestPriorityEnum ;
   medium : CodeableConcept [];
   subject : Reference ;
   recipient : Reference [];
   topic : Reference [];
   context : Reference ;
   payload : CommunicationRequest_Payload [];
   occurrenceDateTime : string ;
   occurrencePeriod : Period ;
   authoredOn : string ;
   sender : Reference ;
   requester : CommunicationRequest_Requester ;
   reasonCode : CodeableConcept [];
   reasonReference : Reference [];
   note : Annotation [];
}
