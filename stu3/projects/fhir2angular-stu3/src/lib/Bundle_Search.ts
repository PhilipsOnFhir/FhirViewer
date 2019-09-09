import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { SearchEntryModeEnum } from './SearchEntryModeEnum'

export class Bundle_Search      extends BackboneElement
{

   static def : string = 'Bundle_Search';
   mode : SearchEntryModeEnum ;
   score : string ;
}
