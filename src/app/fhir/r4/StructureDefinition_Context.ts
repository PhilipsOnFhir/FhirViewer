import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { ExtensionContextTypeEnum } from './ExtensionContextTypeEnum'

export class StructureDefinition_Context      extends BackboneElement
{

   static def : string = 'StructureDefinition_Context';
   type : ExtensionContextTypeEnum ;
   expression : string ;
}
