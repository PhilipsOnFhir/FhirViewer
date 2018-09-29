import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { MedicationStatementStatusEnum } from './MedicationStatementStatusEnum'
import { MedicationStatement_Dosage } from './MedicationStatement_Dosage'
import { Period } from './Period'
import { Reference } from './Reference'

export class MedicationStatement      extends DomainResource
{

   static def : string = 'MedicationStatement';
   identifier : Identifier [];
   patient : Reference ;
   informationSource : Reference ;
   dateAsserted : string ;
   status : MedicationStatementStatusEnum ;
   wasNotTaken : string ;
   reasonNotTaken : CodeableConcept [];
   reasonForUseCodeableConcept : CodeableConcept ;
   reasonForUseReference : Reference ;
   effectiveDateTime : string ;
   effectivePeriod : Period ;
   note : string ;
   supportingInformation : Reference [];
   medicationCodeableConcept : CodeableConcept ;
   medicationReference : Reference ;
   dosage : MedicationStatement_Dosage [];
}
