import { Annotation } from './Annotation'
import { CodeableConcept } from './CodeableConcept'
import { Communication_Payload } from './Communication_Payload'
import { DomainResource } from './DomainResource'
import { EventStatusEnum } from './EventStatusEnum'
import { Identifier } from './Identifier'
import { Reference } from './Reference'

export class Communication      extends DomainResource
{

   static def : string = 'Communication';
   identifier : Identifier [];
   definition : Reference [];
   basedOn : Reference [];
   partOf : Reference [];
   status : EventStatusEnum ;
   notDone : boolean ;
   notDoneReason : CodeableConcept ;
   category : CodeableConcept [];
   medium : CodeableConcept [];
   subject : Reference ;
   recipient : Reference [];
   topic : Reference [];
   context : Reference ;
   sent : string ;
   received : string ;
   sender : Reference ;
   reasonCode : CodeableConcept [];
   reasonReference : Reference [];
   payload : Communication_Payload [];
   note : Annotation [];
}
