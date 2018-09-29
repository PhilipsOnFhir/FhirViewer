import { Annotation } from './Annotation'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Dosage } from './Dosage'
import { Identifier } from './Identifier'
import { MedicationRequestIntentEnum } from './MedicationRequestIntentEnum'
import { MedicationRequestStatusEnum } from './MedicationRequestStatusEnum'
import { MedicationRequest_DispenseRequest } from './MedicationRequest_DispenseRequest'
import { MedicationRequest_Substitution } from './MedicationRequest_Substitution'
import { Reference } from './Reference'
import { RequestPriorityEnum } from './RequestPriorityEnum'

export class MedicationRequest      extends DomainResource
{

   static def : string = 'MedicationRequest';
   identifier : Identifier [];
   status : MedicationRequestStatusEnum ;
   intent : MedicationRequestIntentEnum ;
   category : CodeableConcept [];
   priority : RequestPriorityEnum ;
   doNotPerform : string ;
   medicationCodeableConcept : CodeableConcept ;
   medicationReference : Reference ;
   subject : Reference ;
   context : Reference ;
   supportingInformation : Reference [];
   authoredOn : string ;
   requester : Reference ;
   performer : Reference ;
   performerType : CodeableConcept ;
   recorder : Reference ;
   reasonCode : CodeableConcept [];
   reasonReference : Reference [];
   instantiates : string [];
   basedOn : Reference [];
   groupIdentifier : Identifier ;
   statusReason : CodeableConcept ;
   insurance : Reference [];
   note : Annotation [];
   dosageInstruction : Dosage [];
   dispenseRequest : MedicationRequest_DispenseRequest ;
   substitution : MedicationRequest_Substitution ;
   priorPrescription : Reference ;
   detectedIssue : Reference [];
   eventHistory : Reference [];
}
