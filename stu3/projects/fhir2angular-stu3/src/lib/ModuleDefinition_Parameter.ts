import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'

export class ModuleDefinition_Parameter      extends BackboneElement
{

   static def : string = 'ModuleDefinition_Parameter';
   name : string ;
   use : string ;
   documentation : string ;
   type : string ;
   profile : Reference ;
}
