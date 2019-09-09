import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { Period } from './Period'

export class ModuleDefinition_DateFilter      extends BackboneElement
{

   static def : string = 'ModuleDefinition_DateFilter';
   path : string ;
   valueDateTime : string ;
   valuePeriod : Period ;
}
