import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { StructureMap_Dependent } from './StructureMap_Dependent'
import { StructureMap_Source } from './StructureMap_Source'
import { StructureMap_Target } from './StructureMap_Target'

export class StructureMap_Rule      extends BackboneElement
{

   static def : string = 'StructureMap_Rule';
   name : string ;
   source : StructureMap_Source [];
   target : StructureMap_Target [];
   rule : StructureMap_Rule [];
   dependent : StructureMap_Dependent [];
   documentation : string ;
}
