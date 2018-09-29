import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { NutritionOrder_Administration } from './NutritionOrder_Administration'
import { SimpleQuantity } from './SimpleQuantity'

export class NutritionOrder_EnteralFormula      extends BackboneElement
{

   static def : string = 'NutritionOrder_EnteralFormula';
   baseFormulaType : CodeableConcept ;
   baseFormulaProductName : string ;
   additiveType : CodeableConcept ;
   additiveProductName : string ;
   caloricDensity : SimpleQuantity ;
   routeofAdministration : CodeableConcept ;
   administration : NutritionOrder_Administration [];
   maxVolumeToDeliver : SimpleQuantity ;
   administrationInstruction : string ;
}
