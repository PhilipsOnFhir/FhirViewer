import { DomainResource } from './DomainResource'
import { Extension } from './Extension'
import { QuantityComparatorEnum } from './QuantityComparatorEnum'

export class Distance{

   static def : string = 'Distance';
   extension : Extension [];
   value : string ;
   comparator : QuantityComparatorEnum ;
   unit : string ;
   system : string ;
   code : string ;
}
