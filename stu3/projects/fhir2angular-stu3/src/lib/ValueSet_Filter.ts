import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { FilterOperatorEnum } from './FilterOperatorEnum'

export class ValueSet_Filter      extends BackboneElement
{

   static def : string = 'ValueSet_Filter';
   property : string ;
   op : FilterOperatorEnum ;
   value : string ;
}
