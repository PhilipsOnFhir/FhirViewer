import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { GraphDefinition_Compartment } from './GraphDefinition_Compartment'
import { GraphDefinition_Link } from './GraphDefinition_Link'
import { ResourceTypeEnum } from './ResourceTypeEnum'

export class GraphDefinition_Target      extends BackboneElement
{

   static def : string = 'GraphDefinition_Target';
   type : ResourceTypeEnum ;
   params : string ;
   profile : string ;
   compartment : GraphDefinition_Compartment [];
   link : GraphDefinition_Link [];
}
