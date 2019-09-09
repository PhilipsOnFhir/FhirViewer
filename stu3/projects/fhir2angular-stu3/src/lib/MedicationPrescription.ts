import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { MedicationPrescriptionStatusEnum } from './MedicationPrescriptionStatusEnum'
import { MedicationPrescription_Dispense } from './MedicationPrescription_Dispense'
import { MedicationPrescription_DosageInstruction } from './MedicationPrescription_DosageInstruction'
import { MedicationPrescription_Substitution } from './MedicationPrescription_Substitution'
import { Reference } from './Reference'

export class MedicationPrescription      extends DomainResource
{

   static def : string = 'MedicationPrescription';
   identifier : Identifier [];
   dateWritten : string ;
   status : MedicationPrescriptionStatusEnum ;
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
   dosageInstruction : MedicationPrescription_DosageInstruction [];
   dispense : MedicationPrescription_Dispense ;
   substitution : MedicationPrescription_Substitution ;
   priorPrescription : Reference ;
}
