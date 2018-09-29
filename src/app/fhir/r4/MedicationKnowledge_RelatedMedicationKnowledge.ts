import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'

export class MedicationKnowledge_RelatedMedicationKnowledge      extends BackboneElement
{

   static def : string = 'MedicationKnowledge_RelatedMedicationKnowledge';
   type : CodeableConcept ;
   reference : Reference [];
}
