import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { NutritionOrder_Administration } from './NutritionOrder_Administration'
import { Quantity } from './Quantity'

export class NutritionOrder_EnteralFormula      extends BackboneElement
{

   static def : string = 'NutritionOrder_EnteralFormula';
   baseFormulaType : CodeableConcept ;
   baseFormulaProductName : string ;
   additiveType : CodeableConcept ;
   additiveProductName : string ;
   caloricDensity : Quantity ;
   routeofAdministration : CodeableConcept ;
   administration : NutritionOrder_Administration [];
   maxVolumeToDeliver : Quantity ;
   administrationInstruction : string ;
}
