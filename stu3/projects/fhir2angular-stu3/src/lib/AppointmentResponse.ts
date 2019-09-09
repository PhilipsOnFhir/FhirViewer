import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { ParticipationStatusEnum } from './ParticipationStatusEnum'
import { Reference } from './Reference'

export class AppointmentResponse      extends DomainResource
{

   static def : string = 'AppointmentResponse';
   identifier : Identifier [];
   appointment : Reference ;
   start : string ;
   end : string ;
   participantType : CodeableConcept [];
   actor : Reference ;
   participantStatus : ParticipationStatusEnum ;
   comment : string ;
}
