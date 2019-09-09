import { Annotation } from './Annotation'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { MedicationOrderCategoryEnum } from './MedicationOrderCategoryEnum'
import { MedicationOrderStatusEnum } from './MedicationOrderStatusEnum'
import { MedicationOrder_DispenseRequest } from './MedicationOrder_DispenseRequest'
import { MedicationOrder_Substitution } from './MedicationOrder_Substitution'
import { Reference } from './Reference'

export class MedicationOrder      extends DomainResource
{

   static def : string = 'MedicationOrder';
   identifier : Identifier [];
   definition : Reference [];
   basedOn : Reference [];
   requisition : Identifier ;
   status : MedicationOrderStatusEnum ;
   stage : CodeableConcept ;
   medicationCodeableConcept : CodeableConcept ;
   medicationReference : Reference ;
   patient : Reference ;
   encounter : Reference ;
   supportingInformation : Reference [];
   dateWritten : string ;
   prescriber : Reference ;
   reasonCode : CodeableConcept [];
   reasonReference : Reference [];
   note : Annotation [];
   category : MedicationOrderCategoryEnum ;
   dosageInstruction : string [];
   dispenseRequest : MedicationOrder_DispenseRequest ;
   substitution : MedicationOrder_Substitution ;
   priorPrescription : Reference ;
   eventHistory : Reference [];
}
