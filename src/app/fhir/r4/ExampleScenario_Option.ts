import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { ExampleScenario_Step } from './ExampleScenario_Step'

export class ExampleScenario_Option      extends BackboneElement
{

   static def : string = 'ExampleScenario_Option';
   description : string ;
   step : ExampleScenario_Step [];
   pause : string [];
}
