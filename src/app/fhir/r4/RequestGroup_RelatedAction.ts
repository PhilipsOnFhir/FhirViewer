import { ActionRelationshipTypeEnum } from './ActionRelationshipTypeEnum'
import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { Range } from './Range'

export class RequestGroup_RelatedAction      extends BackboneElement
{

   static def : string = 'RequestGroup_RelatedAction';
   actionId : string ;
   relationship : ActionRelationshipTypeEnum ;
   offsetDuration : string ;
   offsetRange : Range ;
}
