import { DomainResource } from './DomainResource'
import { Element } from './Element'
import { SimpleQuantity } from './SimpleQuantity'

export class SampledData      extends Element
{

   static def : string = 'SampledData';
   origin : SimpleQuantity ;
   period : string ;
   factor : string ;
   lowerLimit : string ;
   upperLimit : string ;
   dimensions : string ;
   data : string ;
}
