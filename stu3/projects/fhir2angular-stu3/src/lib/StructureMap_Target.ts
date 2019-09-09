import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { StructureMapContextTypeEnum } from './StructureMapContextTypeEnum'
import { StructureMapTargetListModeEnum } from './StructureMapTargetListModeEnum'
import { StructureMapTransformEnum } from './StructureMapTransformEnum'
import { StructureMap_Parameter } from './StructureMap_Parameter'

export class StructureMap_Target      extends BackboneElement
{

   static def : string = 'StructureMap_Target';
   context : string ;
   contextType : StructureMapContextTypeEnum ;
   element : string ;
   variable : string ;
   listMode : StructureMapTargetListModeEnum [];
   listRuleId : string ;
   transform : StructureMapTransformEnum ;
   parameter : StructureMap_Parameter [];
}
