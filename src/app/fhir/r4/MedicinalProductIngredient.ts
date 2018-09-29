import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { MedicinalProductIngredient_SpecifiedSubstance } from './MedicinalProductIngredient_SpecifiedSubstance'
import { MedicinalProductIngredient_Substance } from './MedicinalProductIngredient_Substance'
import { Reference } from './Reference'

export class MedicinalProductIngredient      extends DomainResource
{

   static def : string = 'MedicinalProductIngredient';
   identifier : Identifier ;
   role : CodeableConcept ;
   allergenicIndicator : string ;
   manufacturer : Reference [];
   specifiedSubstance : MedicinalProductIngredient_SpecifiedSubstance [];
   substance : MedicinalProductIngredient_Substance ;
}
