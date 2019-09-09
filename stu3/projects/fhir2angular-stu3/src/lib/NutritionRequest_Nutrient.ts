import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Quantity } from './Quantity'

export class NutritionRequest_Nutrient      extends BackboneElement
{

   static def : string = 'NutritionRequest_Nutrient';
   modifier : CodeableConcept ;
   amount : Quantity ;
}
