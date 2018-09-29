import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { MedicationOrderStatusEnum } from './MedicationOrderStatusEnum'
import { MedicationOrder_DispenseRequest } from './MedicationOrder_DispenseRequest'
import { MedicationOrder_DosageInstruction } from './MedicationOrder_DosageInstruction'
import { MedicationOrder_Substitution } from './MedicationOrder_Substitution'
import { Reference } from './Reference'

export class MedicationOrder      extends DomainResource
{

   static def : string = 'MedicationOrder';
   identifier : Identifier [];
   dateWritten : string ;
   status : MedicationOrderStatusEnum ;
   dateEnded : string ;
   reasonEnded : CodeableConcept ;
   patient : Reference ;
   prescriber : Reference ;
   encounter : Reference ;
   reasonCodeableConcept : CodeableConcept ;
   reasonReference : Reference ;
   note : string ;
   medicationCodeableConcept : CodeableConcept ;
   medicationReference : Reference ;
   dosageInstruction : MedicationOrder_DosageInstruction [];
   dispenseRequest : MedicationOrder_DispenseRequest ;
   substitution : MedicationOrder_Substitution ;
   priorPrescription : Reference ;
}
