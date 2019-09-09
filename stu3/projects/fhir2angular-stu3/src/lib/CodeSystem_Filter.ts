import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { FilterOperatorEnum } from './FilterOperatorEnum'

export class CodeSystem_Filter      extends BackboneElement
{

   static def : string = 'CodeSystem_Filter';
   code : string ;
   description : string ;
   operator : FilterOperatorEnum [];
   value : string ;
}
