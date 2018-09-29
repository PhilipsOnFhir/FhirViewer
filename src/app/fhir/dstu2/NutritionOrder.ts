import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { NutritionOrderStatusEnum } from './NutritionOrderStatusEnum'
import { NutritionOrder_EnteralFormula } from './NutritionOrder_EnteralFormula'
import { NutritionOrder_OralDiet } from './NutritionOrder_OralDiet'
import { NutritionOrder_Supplement } from './NutritionOrder_Supplement'
import { Reference } from './Reference'

export class NutritionOrder      extends DomainResource
{

   static def : string = 'NutritionOrder';
   patient : Reference ;
   orderer : Reference ;
   identifier : Identifier [];
   encounter : Reference ;
   dateTime : string ;
   status : NutritionOrderStatusEnum ;
   allergyIntolerance : Reference [];
   foodPreferenceModifier : CodeableConcept [];
   excludeFoodModifier : CodeableConcept [];
   oralDiet : NutritionOrder_OralDiet ;
   supplement : NutritionOrder_Supplement [];
   enteralFormula : NutritionOrder_EnteralFormula ;
}
