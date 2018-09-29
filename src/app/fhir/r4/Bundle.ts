import { BundleTypeEnum } from './BundleTypeEnum'
import { Bundle_Entry } from './Bundle_Entry'
import { Bundle_Link } from './Bundle_Link'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { Resource } from './Resource'
import { Signature } from './Signature'

export class Bundle      extends DomainResource
{

   static def : string = 'Bundle';
   identifier : Identifier ;
   type : BundleTypeEnum ;
   timestamp : string ;
   total : string ;
   link : Bundle_Link [];
   entry : Bundle_Entry [];
   signature : Signature ;
}
