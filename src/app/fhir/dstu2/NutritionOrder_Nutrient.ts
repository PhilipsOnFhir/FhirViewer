import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { SimpleQuantity } from './SimpleQuantity'

export class NutritionOrder_Nutrient      extends BackboneElement
{

   static def : string = 'NutritionOrder_Nutrient';
   modifier : CodeableConcept ;
   amount : SimpleQuantity ;
}
