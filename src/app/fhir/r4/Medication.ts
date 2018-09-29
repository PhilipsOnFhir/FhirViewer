import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { MedicationStatusEnum } from './MedicationStatusEnum'
import { Medication_Batch } from './Medication_Batch'
import { Medication_Ingredient } from './Medication_Ingredient'
import { Quantity } from './Quantity'
import { Reference } from './Reference'

export class Medication      extends DomainResource
{

   static def : string = 'Medication';
   code : CodeableConcept ;
   status : MedicationStatusEnum ;
   manufacturer : Reference ;
   form : CodeableConcept ;
   amount : Quantity ;
   ingredient : Medication_Ingredient [];
   batch : Medication_Batch ;
}
