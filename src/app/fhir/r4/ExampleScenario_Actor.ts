import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { ExampleScenarioActorTypeEnum } from './ExampleScenarioActorTypeEnum'

export class ExampleScenario_Actor      extends BackboneElement
{

   static def : string = 'ExampleScenario_Actor';
   actorId : string ;
   type : ExampleScenarioActorTypeEnum ;
   name : string ;
   description : string ;
}
