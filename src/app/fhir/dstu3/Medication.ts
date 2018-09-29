import { Attachment } from './Attachment'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { MedicationStatusEnum } from './MedicationStatusEnum'
import { Medication_Ingredient } from './Medication_Ingredient'
import { Medication_Package } from './Medication_Package'
import { Reference } from './Reference'

export class Medication      extends DomainResource
{

   static def : string = 'Medication';
   code : CodeableConcept ;
   status : MedicationStatusEnum ;
   isBrand : string ;
   isOverTheCounter : string ;
   manufacturer : Reference ;
   form : CodeableConcept ;
   ingredient : Medication_Ingredient [];
   package : Medication_Package ;
   image : Attachment [];
}
