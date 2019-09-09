import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { Quantity } from './Quantity'
import { Ratio } from './Ratio'
import { Timing } from './Timing'

export class NutritionRequest_Administration      extends BackboneElement
{

   static def : string = 'NutritionRequest_Administration';
   schedule : Timing ;
   quantity : Quantity ;
   rateQuantity : Quantity ;
   rateRatio : Ratio ;
}
