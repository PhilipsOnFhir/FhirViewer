import { DomainResource } from './DomainResource'
import { Extension } from './Extension'
import { QuantityComparatorEnum } from './QuantityComparatorEnum'

export class SimpleQuantity{

   static def : string = 'SimpleQuantity';
   extension : Extension [];
   value : string ;
   comparator : QuantityComparatorEnum [];
   unit : string ;
   system : string ;
   code : string ;
}
