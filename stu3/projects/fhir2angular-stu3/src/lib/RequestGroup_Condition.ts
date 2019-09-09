import { ActionConditionKindEnum } from './ActionConditionKindEnum'
import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'

export class RequestGroup_Condition      extends BackboneElement
{

   static def : string = 'RequestGroup_Condition';
   kind : ActionConditionKindEnum ;
   description : string ;
   language : string ;
   expression : string ;
}
