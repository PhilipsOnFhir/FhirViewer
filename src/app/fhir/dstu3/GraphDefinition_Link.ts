import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { GraphDefinition_Target } from './GraphDefinition_Target'

export class GraphDefinition_Link      extends BackboneElement
{

   static def : string = 'GraphDefinition_Link';
   path : string ;
   sliceName : string ;
   min : string ;
   max : string ;
   description : string ;
   target : GraphDefinition_Target [];
}
