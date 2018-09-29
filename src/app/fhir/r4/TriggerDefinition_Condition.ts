import { DomainResource } from './DomainResource'
import { Element } from './Element'
import { ExpressionLanguageEnum } from './ExpressionLanguageEnum'

export class TriggerDefinition_Condition      extends Element
{

   static def : string = 'TriggerDefinition_Condition';
   description : string ;
   language : ExpressionLanguageEnum ;
   expression : string ;
}
