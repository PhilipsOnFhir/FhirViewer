import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { ExampleScenario_Option } from './ExampleScenario_Option'

export class ExampleScenario_Alternative      extends BackboneElement
{

   static def : string = 'ExampleScenario_Alternative';
   name : string ;
   option : ExampleScenario_Option [];
}
