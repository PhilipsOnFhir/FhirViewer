import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'

export class ModuleDefinition_CodeFilter      extends BackboneElement
{

   static def : string = 'ModuleDefinition_CodeFilter';
   path : string ;
   valueSetString : string ;
   valueSetReference : Reference ;
   codeableConcept : CodeableConcept [];
}
