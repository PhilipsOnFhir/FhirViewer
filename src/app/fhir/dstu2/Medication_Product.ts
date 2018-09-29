import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Medication_Batch } from './Medication_Batch'
import { Medication_Ingredient } from './Medication_Ingredient'

export class Medication_Product      extends BackboneElement
{

   static def : string = 'Medication_Product';
   form : CodeableConcept ;
   ingredient : Medication_Ingredient [];
   batch : Medication_Batch [];
}
