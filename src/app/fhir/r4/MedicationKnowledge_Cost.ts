import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Money } from './Money'

export class MedicationKnowledge_Cost      extends BackboneElement
{

   static def : string = 'MedicationKnowledge_Cost';
   type : CodeableConcept ;
   source : string ;
   cost : Money ;
}
