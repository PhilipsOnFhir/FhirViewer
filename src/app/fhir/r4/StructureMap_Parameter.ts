import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'

export class StructureMap_Parameter      extends BackboneElement
{

   static def : string = 'StructureMap_Parameter';
   valueId : string ;
   valueString : string ;
   valueBoolean : string ;
   valueInteger : string ;
   valueDecimal : string ;
}
