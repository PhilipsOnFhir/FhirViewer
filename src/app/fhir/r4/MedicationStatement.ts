import { Annotation } from './Annotation'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Dosage } from './Dosage'
import { Identifier } from './Identifier'
import { MedicationStatementStatusEnum } from './MedicationStatementStatusEnum'
import { Period } from './Period'
import { Reference } from './Reference'

export class MedicationStatement      extends DomainResource
{

   static def : string = 'MedicationStatement';
   identifier : Identifier [];
   basedOn : Reference [];
   partOf : Reference [];
   status : MedicationStatementStatusEnum ;
   statusReason : CodeableConcept [];
   category : CodeableConcept ;
   medicationCodeableConcept : CodeableConcept ;
   medicationReference : Reference ;
   subject : Reference ;
   context : Reference ;
   effectiveDateTime : string ;
   effectivePeriod : Period ;
   dateAsserted : string ;
   informationSource : Reference ;
   derivedFrom : Reference [];
   reasonCode : CodeableConcept [];
   reasonReference : Reference [];
   note : Annotation [];
   dosage : Dosage [];
}
