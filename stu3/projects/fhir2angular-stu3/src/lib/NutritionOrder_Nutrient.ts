import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Quantity } from './Quantity'

export class NutritionOrder_Nutrient      extends BackboneElement
{

   static def : string = 'NutritionOrder_Nutrient';
   modifier : CodeableConcept ;
   amount : Quantity ;
}
