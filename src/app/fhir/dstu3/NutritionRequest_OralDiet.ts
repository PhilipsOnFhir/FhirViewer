import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { NutritionRequest_Nutrient } from './NutritionRequest_Nutrient'
import { NutritionRequest_Texture } from './NutritionRequest_Texture'
import { Timing } from './Timing'

export class NutritionRequest_OralDiet      extends BackboneElement
{

   static def : string = 'NutritionRequest_OralDiet';
   type : CodeableConcept [];
   schedule : Timing [];
   nutrient : NutritionRequest_Nutrient [];
   texture : NutritionRequest_Texture [];
   fluidConsistencyType : CodeableConcept [];
   instruction : string ;
}
