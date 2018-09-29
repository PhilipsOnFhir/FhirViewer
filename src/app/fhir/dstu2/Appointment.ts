import { AppointmentStatusEnum } from './AppointmentStatusEnum'
import { Appointment_Participant } from './Appointment_Participant'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { Reference } from './Reference'

export class Appointment      extends DomainResource
{

   static def : string = 'Appointment';
   identifier : Identifier [];
   status : AppointmentStatusEnum ;
   type : CodeableConcept ;
   reason : CodeableConcept ;
   priority : string ;
   description : string ;
   start : string ;
   end : string ;
   minutesDuration : string ;
   slot : Reference [];
   comment : string ;
   participant : Appointment_Participant [];
}
