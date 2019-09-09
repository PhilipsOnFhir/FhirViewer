import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { NutritionOrderStatusEnum } from './NutritionOrderStatusEnum'
import { NutritionRequest_EnteralFormula } from './NutritionRequest_EnteralFormula'
import { NutritionRequest_OralDiet } from './NutritionRequest_OralDiet'
import { NutritionRequest_Supplement } from './NutritionRequest_Supplement'
import { Reference } from './Reference'

export class NutritionRequest      extends DomainResource
{

   static def : string = 'NutritionRequest';
   identifier : Identifier [];
   status : NutritionOrderStatusEnum ;
   patient : Reference ;
   encounter : Reference ;
   dateTime : string ;
   orderer : Reference ;
   allergyIntolerance : Reference [];
   foodPreferenceModifier : CodeableConcept [];
   excludeFoodModifier : CodeableConcept [];
   oralDiet : NutritionRequest_OralDiet ;
   supplement : NutritionRequest_Supplement [];
   enteralFormula : NutritionRequest_EnteralFormula ;
}
