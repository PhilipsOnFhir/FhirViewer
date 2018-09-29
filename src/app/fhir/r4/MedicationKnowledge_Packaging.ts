import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Quantity } from './Quantity'

export class MedicationKnowledge_Packaging      extends BackboneElement
{

   static def : string = 'MedicationKnowledge_Packaging';
   type : CodeableConcept ;
   quantity : Quantity ;
}
