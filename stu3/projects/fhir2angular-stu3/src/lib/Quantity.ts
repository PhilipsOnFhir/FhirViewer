import { DomainResource } from './DomainResource'
import { Element } from './Element'
import { QuantityComparatorEnum } from './QuantityComparatorEnum'

export class Quantity      extends Element
{

   static def : string = 'Quantity';
   value : string ;
   comparator : QuantityComparatorEnum ;
   unit : string ;
   system : string ;
   code : string ;
}
