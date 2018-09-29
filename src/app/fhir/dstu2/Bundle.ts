import { BundleTypeEnum } from './BundleTypeEnum'
import { Bundle_Entry } from './Bundle_Entry'
import { Bundle_Link } from './Bundle_Link'
import { DomainResource } from './DomainResource'
import { Resource } from './Resource'
import { Signature } from './Signature'

export class Bundle      extends DomainResource
{

   static def : string = 'Bundle';
   type : BundleTypeEnum ;
   total : string ;
   link : Bundle_Link [];
   entry : Bundle_Entry [];
   signature : Signature ;
}
