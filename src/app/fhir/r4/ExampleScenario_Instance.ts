import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { ExampleScenario_ContainedInstance } from './ExampleScenario_ContainedInstance'
import { ExampleScenario_Version } from './ExampleScenario_Version'
import { ResourceTypeEnum } from './ResourceTypeEnum'

export class ExampleScenario_Instance      extends BackboneElement
{

   static def : string = 'ExampleScenario_Instance';
   resourceId : string ;
   resourceType : ResourceTypeEnum ;
   name : string ;
   description : string ;
   version : ExampleScenario_Version [];
   containedInstance : ExampleScenario_ContainedInstance [];
}
