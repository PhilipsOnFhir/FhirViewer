import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Ratio } from './Ratio'
import { Reference } from './Reference'

export class MedicationKnowledge_Ingredient      extends BackboneElement
{

   static def : string = 'MedicationKnowledge_Ingredient';
   itemCodeableConcept : CodeableConcept ;
   itemReference : Reference ;
   isActive : string ;
   strength : Ratio ;
}
