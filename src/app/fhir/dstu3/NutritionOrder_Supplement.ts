import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Quantity } from './Quantity'
import { Timing } from './Timing'

export class NutritionOrder_Supplement      extends BackboneElement
{

   static def : string = 'NutritionOrder_Supplement';
   type : CodeableConcept ;
   productName : string ;
   schedule : Timing [];
   quantity : Quantity ;
   instruction : string ;
}
