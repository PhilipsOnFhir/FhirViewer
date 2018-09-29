import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { Range } from './Range'

export class ActivityGroup_RelatedAction      extends BackboneElement
{

   static def : string = 'ActivityGroup_RelatedAction';
   actionIdentifier : Identifier ;
   relationship : string ;
   offsetDuration : string ;
   offsetRange : Range ;
   anchor : string ;
}
