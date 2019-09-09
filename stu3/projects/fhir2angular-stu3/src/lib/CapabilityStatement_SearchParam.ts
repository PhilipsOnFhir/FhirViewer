import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { SearchParamTypeEnum } from './SearchParamTypeEnum'

export class CapabilityStatement_SearchParam      extends BackboneElement
{

   static def : string = 'CapabilityStatement_SearchParam';
   name : string ;
   definition : string ;
   type : SearchParamTypeEnum ;
   documentation : string ;
}
