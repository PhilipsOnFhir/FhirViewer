import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { ExampleScenario_ContainedInstance } from './ExampleScenario_ContainedInstance'

export class ExampleScenario_Operation      extends BackboneElement
{

   static def : string = 'ExampleScenario_Operation';
   number : string ;
   type : string ;
   name : string ;
   initiator : string ;
   receiver : string ;
   description : string ;
   initiatorActive : string ;
   receiverActive : string ;
   request : ExampleScenario_ContainedInstance ;
   response : ExampleScenario_ContainedInstance ;
}
