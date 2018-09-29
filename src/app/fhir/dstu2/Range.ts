import { DomainResource } from './DomainResource'
import { Element } from './Element'
import { SimpleQuantity } from './SimpleQuantity'

export class Range      extends Element
{

   static def : string = 'Range';
   low : SimpleQuantity ;
   high : SimpleQuantity ;
}
