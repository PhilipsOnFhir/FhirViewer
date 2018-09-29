import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'

export class NutritionOrder_Texture      extends BackboneElement
{

   static def : string = 'NutritionOrder_Texture';
   modifier : CodeableConcept ;
   foodType : CodeableConcept ;
}
