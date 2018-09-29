import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { SearchModifierCodeEnum } from './SearchModifierCodeEnum'

export class Conformance_SearchParam      extends BackboneElement
{

   static def : string = 'Conformance_SearchParam';
   name : string ;
   definition : string ;
   type : string ;
   documentation : string ;
   target : string [];
   modifier : SearchModifierCodeEnum [];
   chain : string [];
}
