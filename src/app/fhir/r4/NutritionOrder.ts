import { Annotation } from './Annotation'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { NutritionOrder_EnteralFormula } from './NutritionOrder_EnteralFormula'
import { NutritionOrder_OralDiet } from './NutritionOrder_OralDiet'
import { NutritionOrder_Supplement } from './NutritionOrder_Supplement'
import { Reference } from './Reference'
import { RequestIntentEnum } from './RequestIntentEnum'
import { RequestStatusEnum } from './RequestStatusEnum'

export class NutritionOrder      extends DomainResource
{

   static def : string = 'NutritionOrder';
   identifier : Identifier [];
   instantiates : string [];
   status : RequestStatusEnum ;
   intent : RequestIntentEnum ;
   patient : Reference ;
   context : Reference ;
   dateTime : string ;
   orderer : Reference ;
   allergyIntolerance : Reference [];
   foodPreferenceModifier : CodeableConcept [];
   excludeFoodModifier : CodeableConcept [];
   oralDiet : NutritionOrder_OralDiet ;
   supplement : NutritionOrder_Supplement [];
   enteralFormula : NutritionOrder_EnteralFormula ;
   note : Annotation [];
}
