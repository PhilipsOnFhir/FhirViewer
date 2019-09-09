import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'

export class ModuleDefinition_ValueSet      extends BackboneElement
{

   static def : string = 'ModuleDefinition_ValueSet';
   name : string ;
   identifier : string ;
   version : string ;
   codeSystem : string [];
}
