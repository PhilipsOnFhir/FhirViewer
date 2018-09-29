import { CodeableConcept } from './CodeableConcept'
import { CommunicationRequestStatusEnum } from './CommunicationRequestStatusEnum'
import { CommunicationRequest_Payload } from './CommunicationRequest_Payload'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { Period } from './Period'
import { Reference } from './Reference'

export class CommunicationRequest      extends DomainResource
{

   static def : string = 'CommunicationRequest';
   identifier : Identifier [];
   category : CodeableConcept ;
   sender : Reference ;
   recipient : Reference [];
   payload : CommunicationRequest_Payload [];
   medium : CodeableConcept [];
   requester : Reference ;
   status : CommunicationRequestStatusEnum ;
   encounter : Reference ;
   scheduledDateTime : string ;
   scheduledPeriod : Period ;
   reason : CodeableConcept [];
   requestedOn : string ;
   subject : Reference ;
   priority : CodeableConcept ;
}
