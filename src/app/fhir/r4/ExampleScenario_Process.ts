import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { ExampleScenario_Step } from './ExampleScenario_Step'

export class ExampleScenario_Process      extends BackboneElement
{

   static def : string = 'ExampleScenario_Process';
   title : string ;
   description : string ;
   preConditions : string ;
   postConditions : string ;
   step : ExampleScenario_Step [];
}
