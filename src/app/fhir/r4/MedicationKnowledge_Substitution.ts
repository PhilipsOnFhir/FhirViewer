import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'

export class MedicationKnowledge_Substitution      extends BackboneElement
{

   static def : string = 'MedicationKnowledge_Substitution';
   type : CodeableConcept ;
   allowed : string ;
}
