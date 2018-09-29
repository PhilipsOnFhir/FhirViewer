import { Annotation } from './Annotation'
import { CodeableConcept } from './CodeableConcept'
import { Communication_Payload } from './Communication_Payload'
import { DomainResource } from './DomainResource'
import { EventStatusEnum } from './EventStatusEnum'
import { Identifier } from './Identifier'
import { Reference } from './Reference'
import { RequestPriorityEnum } from './RequestPriorityEnum'

export class Communication      extends DomainResource
{

   static def : string = 'Communication';
   identifier : Identifier [];
   instantiatesCanonical : string [];
   instantiatesUri : string [];
   basedOn : Reference [];
   partOf : Reference [];
   inResponseTo : Reference [];
   status : EventStatusEnum ;
   statusReason : CodeableConcept ;
   category : CodeableConcept [];
   priority : RequestPriorityEnum ;
   medium : CodeableConcept [];
   subject : Reference ;
   topic : CodeableConcept ;
   about : Reference [];
   context : Reference ;
   sent : string ;
   received : string ;
   recipient : Reference [];
   sender : Reference ;
   reasonCode : CodeableConcept [];
   reasonReference : Reference [];
   payload : Communication_Payload [];
   note : Annotation [];
}
