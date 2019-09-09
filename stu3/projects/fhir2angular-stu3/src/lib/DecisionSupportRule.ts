import { DomainResource } from './DomainResource'
import { ModuleMetadata } from './ModuleMetadata'
import { Reference } from './Reference'
import { TriggerDefinition } from './TriggerDefinition'

export class DecisionSupportRule      extends DomainResource
{

   static def : string = 'DecisionSupportRule';
   moduleMetadata : ModuleMetadata ;
   library : Reference [];
   trigger : TriggerDefinition [];
   condition : string ;
   action : string [];
}
