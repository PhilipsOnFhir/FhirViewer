import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { ExampleScenario_Alternative } from './ExampleScenario_Alternative'
import { ExampleScenario_Operation } from './ExampleScenario_Operation'
import { ExampleScenario_Process } from './ExampleScenario_Process'

export class ExampleScenario_Step      extends BackboneElement
{

   static def : string = 'ExampleScenario_Step';
   process : ExampleScenario_Process [];
   pause : string ;
   operation : ExampleScenario_Operation ;
   alternative : ExampleScenario_Alternative ;
}
