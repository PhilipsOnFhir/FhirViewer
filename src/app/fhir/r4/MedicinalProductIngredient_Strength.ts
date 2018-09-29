import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { MedicinalProductIngredient_ReferenceStrength } from './MedicinalProductIngredient_ReferenceStrength'
import { Ratio } from './Ratio'

export class MedicinalProductIngredient_Strength      extends BackboneElement
{

   static def : string = 'MedicinalProductIngredient_Strength';
   presentation : Ratio ;
   concentration : Ratio ;
   measurementPoint : string ;
   country : CodeableConcept [];
   referenceStrength : MedicinalProductIngredient_ReferenceStrength [];
}
