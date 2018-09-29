import { CodeableConcept } from './CodeableConcept'
import { CommunicationStatusEnum } from './CommunicationStatusEnum'
import { Communication_Payload } from './Communication_Payload'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { Reference } from './Reference'

export class Communication      extends DomainResource
{

   static def : string = 'Communication';
   identifier : Identifier [];
   category : CodeableConcept ;
   sender : Reference ;
   recipient : Reference [];
   payload : Communication_Payload [];
   medium : CodeableConcept [];
   status : CommunicationStatusEnum ;
   encounter : Reference ;
   sent : string ;
   received : string ;
   reason : CodeableConcept [];
   subject : Reference ;
   requestDetail : Reference ;
}
