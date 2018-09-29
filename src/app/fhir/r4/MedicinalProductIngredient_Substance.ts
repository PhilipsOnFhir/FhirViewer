import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { MedicinalProductIngredient_Strength } from './MedicinalProductIngredient_Strength'

export class MedicinalProductIngredient_Substance      extends BackboneElement
{

   static def : string = 'MedicinalProductIngredient_Substance';
   code : CodeableConcept ;
   strength : MedicinalProductIngredient_Strength [];
}
