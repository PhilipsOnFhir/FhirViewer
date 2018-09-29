import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { ModuleDefinition_CodeFilter } from './ModuleDefinition_CodeFilter'
import { ModuleDefinition_DateFilter } from './ModuleDefinition_DateFilter'
import { Reference } from './Reference'

export class ModuleDefinition_Data      extends BackboneElement
{

   static def : string = 'ModuleDefinition_Data';
   type : string ;
   profile : Reference ;
   mustSupport : string [];
   codeFilter : ModuleDefinition_CodeFilter [];
   dateFilter : ModuleDefinition_DateFilter [];
}
