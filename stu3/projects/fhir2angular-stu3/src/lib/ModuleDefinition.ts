import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { ModuleDefinition_CodeSystem } from './ModuleDefinition_CodeSystem'
import { ModuleDefinition_Data } from './ModuleDefinition_Data'
import { ModuleDefinition_Library } from './ModuleDefinition_Library'
import { ModuleDefinition_Model } from './ModuleDefinition_Model'
import { ModuleDefinition_Parameter } from './ModuleDefinition_Parameter'
import { ModuleDefinition_ValueSet } from './ModuleDefinition_ValueSet'

export class ModuleDefinition      extends DomainResource
{

   static def : string = 'ModuleDefinition';
   identifier : Identifier [];
   version : string ;
   model : ModuleDefinition_Model [];
   library : ModuleDefinition_Library [];
   codeSystem : ModuleDefinition_CodeSystem [];
   valueSet : ModuleDefinition_ValueSet [];
   parameter : ModuleDefinition_Parameter [];
   data : ModuleDefinition_Data [];
}
