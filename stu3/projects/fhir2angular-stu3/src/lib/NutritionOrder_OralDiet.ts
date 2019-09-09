import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { NutritionOrder_Nutrient } from './NutritionOrder_Nutrient'
import { NutritionOrder_Texture } from './NutritionOrder_Texture'
import { Timing } from './Timing'

export class NutritionOrder_OralDiet      extends BackboneElement
{

   static def : string = 'NutritionOrder_OralDiet';
   type : CodeableConcept [];
   schedule : Timing [];
   nutrient : NutritionOrder_Nutrient [];
   texture : NutritionOrder_Texture [];
   fluidConsistencyType : CodeableConcept [];
   instruction : string ;
}
