import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { MedicinalProductIngredient_Strength } from './MedicinalProductIngredient_Strength'

export class MedicinalProductIngredient_SpecifiedSubstance      extends BackboneElement
{

   static def : string = 'MedicinalProductIngredient_SpecifiedSubstance';
   code : CodeableConcept ;
   group : CodeableConcept ;
   confidentiality : CodeableConcept ;
   strength : MedicinalProductIngredient_Strength [];
}
