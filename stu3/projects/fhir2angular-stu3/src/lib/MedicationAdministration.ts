import { Annotation } from './Annotation'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { MedicationAdministrationStatusEnum } from './MedicationAdministrationStatusEnum'
import { MedicationAdministration_Dosage } from './MedicationAdministration_Dosage'
import { MedicationAdministration_Performer } from './MedicationAdministration_Performer'
import { Period } from './Period'
import { Reference } from './Reference'

export class MedicationAdministration      extends DomainResource
{

   static def : string = 'MedicationAdministration';
   identifier : Identifier [];
   definition : Reference [];
   partOf : Reference [];
   status : MedicationAdministrationStatusEnum ;
   category : CodeableConcept ;
   medicationCodeableConcept : CodeableConcept ;
   medicationReference : Reference ;
   subject : Reference ;
   context : Reference ;
   supportingInformation : Reference [];
   effectiveDateTime : string ;
   effectivePeriod : Period ;
   performer : MedicationAdministration_Performer [];
   notGiven : boolean ;
   reasonNotGiven : CodeableConcept [];
   reasonCode : CodeableConcept [];
   reasonReference : Reference [];
   prescription : Reference ;
   device : Reference [];
   note : Annotation [];
   dosage : MedicationAdministration_Dosage ;
   eventHistory : Reference [];
}
