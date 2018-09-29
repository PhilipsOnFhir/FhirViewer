import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { Ratio } from './Ratio'
import { SimpleQuantity } from './SimpleQuantity'
import { Timing } from './Timing'

export class NutritionOrder_Administration      extends BackboneElement
{

   static def : string = 'NutritionOrder_Administration';
   schedule : Timing ;
   quantity : SimpleQuantity ;
   rateQuantity : SimpleQuantity ;
   rateRatio : Ratio ;
}
