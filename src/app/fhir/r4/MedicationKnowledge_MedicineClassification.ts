import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'

export class MedicationKnowledge_MedicineClassification      extends BackboneElement
{

   static def : string = 'MedicationKnowledge_MedicineClassification';
   type : CodeableConcept ;
   classification : CodeableConcept [];
}
