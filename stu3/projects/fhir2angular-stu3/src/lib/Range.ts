import { DomainResource } from './DomainResource'
import { Element } from './Element'
import { Quantity } from './Quantity'

export class Range      extends Element
{

   static def : string = 'Range';
   low : Quantity ;
   high : Quantity ;
}
