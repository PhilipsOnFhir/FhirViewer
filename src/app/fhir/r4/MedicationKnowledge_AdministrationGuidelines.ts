import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { MedicationKnowledge_Dosage } from './MedicationKnowledge_Dosage'
import { MedicationKnowledge_PatientCharacteristics } from './MedicationKnowledge_PatientCharacteristics'
import { Reference } from './Reference'

export class MedicationKnowledge_AdministrationGuidelines      extends BackboneElement
{

   static def : string = 'MedicationKnowledge_AdministrationGuidelines';
   dosage : MedicationKnowledge_Dosage [];
   indicationCodeableConcept : CodeableConcept ;
   indicationReference : Reference ;
   patientCharacteristics : MedicationKnowledge_PatientCharacteristics [];
}
