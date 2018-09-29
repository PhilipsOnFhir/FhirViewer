import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { SimpleQuantity } from './SimpleQuantity'
import { Timing } from './Timing'

export class NutritionOrder_Supplement      extends BackboneElement
{

   static def : string = 'NutritionOrder_Supplement';
   type : CodeableConcept ;
   productName : string ;
   schedule : Timing [];
   quantity : SimpleQuantity ;
   instruction : string ;
}
