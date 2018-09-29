import { BackboneElement } from './BackboneElement'
import { CodeSystem_Designation } from './CodeSystem_Designation'
import { CodeSystem_Property1 } from './CodeSystem_Property1'
import { DomainResource } from './DomainResource'

export class CodeSystem_Concept      extends BackboneElement
{

   static def : string = 'CodeSystem_Concept';
   code : string ;
   display : string ;
   definition : string ;
   designation : CodeSystem_Designation [];
   property : CodeSystem_Property1 [];
   concept : CodeSystem_Concept [];
}
