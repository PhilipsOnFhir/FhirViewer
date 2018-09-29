import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { ValueSet_Designation } from './ValueSet_Designation'

export class ValueSet_Concept      extends BackboneElement
{

   static def : string = 'ValueSet_Concept';
   code : string ;
   abstract : string ;
   display : string ;
   definition : string ;
   designation : ValueSet_Designation [];
   concept : ValueSet_Concept [];
}
