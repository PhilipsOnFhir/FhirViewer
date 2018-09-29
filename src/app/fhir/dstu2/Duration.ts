import { DomainResource } from './DomainResource'
import { Extension } from './Extension'
import { QuantityComparatorEnum } from './QuantityComparatorEnum'

export class Duration{

   static def : string = 'Duration';
   extension : Extension [];
   value : string ;
   comparator : QuantityComparatorEnum ;
   unit : string ;
   system : string ;
   code : string ;
}
