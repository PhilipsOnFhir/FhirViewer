import { DomainResource } from './DomainResource'
import { Extension } from './Extension'
import { QuantityComparatorEnum } from './QuantityComparatorEnum'

export class Money{

   static def : string = 'Money';
   extension : Extension [];
   value : string ;
   comparator : QuantityComparatorEnum ;
   unit : string ;
   system : string ;
   code : string ;
}
