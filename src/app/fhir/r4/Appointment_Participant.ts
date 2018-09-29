import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { ParticipantRequiredEnum } from './ParticipantRequiredEnum'
import { ParticipationStatusEnum } from './ParticipationStatusEnum'
import { Period } from './Period'
import { Reference } from './Reference'

export class Appointment_Participant      extends BackboneElement
{

   static def : string = 'Appointment_Participant';
   type : CodeableConcept [];
   actor : Reference ;
   required : ParticipantRequiredEnum ;
   status : ParticipationStatusEnum ;
   period : Period ;
}
