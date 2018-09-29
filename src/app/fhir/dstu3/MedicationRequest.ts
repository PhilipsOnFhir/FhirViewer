import { Annotation } from './Annotation'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Dosage } from './Dosage'
import { Identifier } from './Identifier'
import { MedicationRequestIntentEnum } from './MedicationRequestIntentEnum'
import { MedicationRequestPriorityEnum } from './MedicationRequestPriorityEnum'
import { MedicationRequestStatusEnum } from './MedicationRequestStatusEnum'
import { MedicationRequest_DispenseRequest } from './MedicationRequest_DispenseRequest'
import { MedicationRequest_Requester } from './MedicationRequest_Requester'
import { MedicationRequest_Substitution } from './MedicationRequest_Substitution'
import { Reference } from './Reference'

export class MedicationRequest      extends DomainResource
{

   static def : string = 'MedicationRequest';
   identifier : Identifier [];
   definition : Reference [];
   basedOn : Reference [];
   groupIdentifier : Identifier ;
   status : MedicationRequestStatusEnum ;
   intent : MedicationRequestIntentEnum ;
   category : CodeableConcept ;
   priority : MedicationRequestPriorityEnum ;
   medicationCodeableConcept : CodeableConcept ;
   medicationReference : Reference ;
   subject : Reference ;
   context : Reference ;
   supportingInformation : Reference [];
   authoredOn : string ;
   requester : MedicationRequest_Requester ;
   recorder : Reference ;
   reasonCode : CodeableConcept [];
   reasonReference : Reference [];
   note : Annotation [];
   dosageInstruction : Dosage [];
   dispenseRequest : MedicationRequest_DispenseRequest ;
   substitution : MedicationRequest_Substitution ;
   priorPrescription : Reference ;
   detectedIssue : Reference [];
   eventHistory : Reference [];
}
