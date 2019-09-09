import { Annotation } from './Annotation'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Dosage } from './Dosage'
import { Identifier } from './Identifier'
import { MedicationStatementStatusEnum } from './MedicationStatementStatusEnum'
import { MedicationStatementTakenEnum } from './MedicationStatementTakenEnum'
import { Period } from './Period'
import { Reference } from './Reference'

export class MedicationStatement      extends DomainResource
{

   static def : string = 'MedicationStatement';
   identifier : Identifier [];
   basedOn : Reference [];
   partOf : Reference [];
   context : Reference ;
   status : MedicationStatementStatusEnum ;
   category : CodeableConcept ;
   medicationCodeableConcept : CodeableConcept ;
   medicationReference : Reference ;
   effectiveDateTime : string ;
   effectivePeriod : Period ;
   dateAsserted : string ;
   informationSource : Reference ;
   subject : Reference ;
   derivedFrom : Reference [];
   taken : MedicationStatementTakenEnum ;
   reasonNotTaken : CodeableConcept [];
   reasonCode : CodeableConcept [];
   reasonReference : Reference [];
   note : Annotation [];
   dosage : Dosage [];
}
