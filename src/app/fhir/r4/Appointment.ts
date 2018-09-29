import { AppointmentStatusEnum } from './AppointmentStatusEnum'
import { Appointment_Participant } from './Appointment_Participant'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { Period } from './Period'
import { Reference } from './Reference'

export class Appointment      extends DomainResource
{

   static def : string = 'Appointment';
   identifier : Identifier [];
   status : AppointmentStatusEnum ;
   serviceCategory : CodeableConcept [];
   serviceType : CodeableConcept [];
   specialty : CodeableConcept [];
   appointmentType : CodeableConcept ;
   reason : CodeableConcept [];
   indication : Reference [];
   priority : string ;
   description : string ;
   supportingInformation : Reference [];
   start : string ;
   end : string ;
   minutesDuration : string ;
   slot : Reference [];
   created : string ;
   comment : string ;
   patientInstruction : string ;
   basedOn : Reference [];
   participant : Appointment_Participant [];
   requestedPeriod : Period [];
}
