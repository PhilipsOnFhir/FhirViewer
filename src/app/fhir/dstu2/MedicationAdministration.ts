import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { MedicationAdministrationStatusEnum } from './MedicationAdministrationStatusEnum'
import { MedicationAdministration_Dosage } from './MedicationAdministration_Dosage'
import { Period } from './Period'
import { Reference } from './Reference'

export class MedicationAdministration      extends DomainResource
{

   static def : string = 'MedicationAdministration';
   identifier : Identifier [];
   status : MedicationAdministrationStatusEnum ;
   patient : Reference ;
   practitioner : Reference ;
   encounter : Reference ;
   prescription : Reference ;
   wasNotGiven : string ;
   reasonNotGiven : CodeableConcept [];
   reasonGiven : CodeableConcept [];
   effectiveTimeDateTime : string ;
   effectiveTimePeriod : Period ;
   medicationCodeableConcept : CodeableConcept ;
   medicationReference : Reference ;
   device : Reference [];
   note : string ;
   dosage : MedicationAdministration_Dosage ;
}
