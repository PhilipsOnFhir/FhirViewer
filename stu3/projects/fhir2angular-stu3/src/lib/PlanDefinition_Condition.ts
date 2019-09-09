import { ActionConditionKindEnum } from './ActionConditionKindEnum'
import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'

export class PlanDefinition_Condition      extends BackboneElement
{

   static def : string = 'PlanDefinition_Condition';
   kind : ActionConditionKindEnum ;
   description : string ;
   language : string ;
   expression : string ;
}
