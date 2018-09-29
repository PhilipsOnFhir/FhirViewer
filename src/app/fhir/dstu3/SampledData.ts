import { DomainResource } from './DomainResource'
import { Element } from './Element'
import { Quantity } from './Quantity'

export class SampledData      extends Element
{

   static def : string = 'SampledData';
   origin : Quantity ;
   period : string ;
   factor : string ;
   lowerLimit : string ;
   upperLimit : string ;
   dimensions : string ;
   data : string ;
}
