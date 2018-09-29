import { ActionRelationshipTypeEnum } from './ActionRelationshipTypeEnum'
import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { Range } from './Range'

export class PlanDefinition_RelatedAction      extends BackboneElement
{

   static def : string = 'PlanDefinition_RelatedAction';
   actionId : string ;
   relationship : ActionRelationshipTypeEnum ;
   offsetDuration : string ;
   offsetRange : Range ;
}
