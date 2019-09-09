import { BackboneElement } from './BackboneElement'
import { Bundle_Link } from './Bundle_Link'
import { Bundle_Request } from './Bundle_Request'
import { Bundle_Response } from './Bundle_Response'
import { Bundle_Search } from './Bundle_Search'
import { DomainResource } from './DomainResource'

export class Bundle_Entry      extends BackboneElement
{

   static def : string = 'Bundle_Entry';
   link : Bundle_Link [];
   fullUrl : string ;
   resource : DomainResource ;
   search : Bundle_Search ;
   request : Bundle_Request ;
   response : Bundle_Response ;
}
