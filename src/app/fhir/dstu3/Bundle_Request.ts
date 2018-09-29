import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { HTTPVerbEnum } from './HTTPVerbEnum'

export class Bundle_Request      extends BackboneElement
{

   static def : string = 'Bundle_Request';
   method : HTTPVerbEnum ;
   url : string ;
   ifNoneMatch : string ;
   ifModifiedSince : string ;
   ifMatch : string ;
   ifNoneExist : string ;
}
