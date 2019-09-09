import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { NutritionRequest_Administration } from './NutritionRequest_Administration'
import { Quantity } from './Quantity'

export class NutritionRequest_EnteralFormula      extends BackboneElement
{

   static def : string = 'NutritionRequest_EnteralFormula';
   baseFormulaType : CodeableConcept ;
   baseFormulaProductName : string ;
   additiveType : CodeableConcept ;
   additiveProductName : string ;
   caloricDensity : Quantity ;
   routeofAdministration : CodeableConcept ;
   administration : NutritionRequest_Administration [];
   maxVolumeToDeliver : Quantity ;
   administrationInstruction : string ;
}
