import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Quantity } from './Quantity'
import { Timing } from './Timing'

export class NutritionRequest_Supplement      extends BackboneElement
{

   static def : string = 'NutritionRequest_Supplement';
   type : CodeableConcept ;
   productName : string ;
   schedule : Timing [];
   quantity : Quantity ;
   instruction : string ;
}
