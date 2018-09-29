import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'

export class Bundle_Response      extends BackboneElement
{

   static def : string = 'Bundle_Response';
   status : string ;
   location : string ;
   etag : string ;
   lastModified : string ;
   outcome : DomainResource ;
}
