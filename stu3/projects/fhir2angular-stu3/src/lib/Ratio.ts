import { DomainResource } from './DomainResource'
import { Element } from './Element'
import { Quantity } from './Quantity'

export class Ratio      extends Element
{

   static def : string = 'Ratio';
   numerator : Quantity ;
   denominator : Quantity ;
}
