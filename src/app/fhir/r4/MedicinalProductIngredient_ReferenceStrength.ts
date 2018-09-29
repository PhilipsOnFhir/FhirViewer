import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'

export class MedicinalProductIngredient_ReferenceStrength      extends BackboneElement
{

   static def : string = 'MedicinalProductIngredient_ReferenceStrength';
   substance : CodeableConcept ;
}
