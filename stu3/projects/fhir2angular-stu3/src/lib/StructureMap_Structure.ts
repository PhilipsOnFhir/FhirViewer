import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { StructureMapModelModeEnum } from './StructureMapModelModeEnum'

export class StructureMap_Structure      extends BackboneElement
{

   static def : string = 'StructureMap_Structure';
   url : string ;
   mode : StructureMapModelModeEnum ;
   alias : string ;
   documentation : string ;
}
