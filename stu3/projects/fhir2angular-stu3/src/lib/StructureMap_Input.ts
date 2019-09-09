import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { StructureMapInputModeEnum } from './StructureMapInputModeEnum'

export class StructureMap_Input      extends BackboneElement
{

   static def : string = 'StructureMap_Input';
   name : string ;
   type : string ;
   mode : StructureMapInputModeEnum ;
   documentation : string ;
}
