import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { StructureMapGroupTypeModeEnum } from './StructureMapGroupTypeModeEnum'
import { StructureMap_Input } from './StructureMap_Input'
import { StructureMap_Rule } from './StructureMap_Rule'

export class StructureMap_Group      extends BackboneElement
{

   static def : string = 'StructureMap_Group';
   name : string ;
   extends : string ;
   typeMode : StructureMapGroupTypeModeEnum ;
   documentation : string ;
   input : StructureMap_Input [];
   rule : StructureMap_Rule [];
}
