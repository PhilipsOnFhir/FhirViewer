import { DomainResource } from './DomainResource'
import { Extension } from './Extension'
import { QuantityComparatorEnum } from './QuantityComparatorEnum'

export class Age{

   static def : string = 'Age';
   extension : Extension [];
   value : string ;
   comparator : QuantityComparatorEnum ;
   unit : string ;
   system : string ;
   code : string ;
}
