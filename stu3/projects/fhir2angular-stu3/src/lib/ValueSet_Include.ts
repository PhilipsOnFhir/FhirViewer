import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { ValueSet_Concept } from './ValueSet_Concept'
import { ValueSet_Filter } from './ValueSet_Filter'

export class ValueSet_Include      extends BackboneElement
{

   static def : string = 'ValueSet_Include';
   system : string ;
   version : string ;
   concept : ValueSet_Concept [];
   filter : ValueSet_Filter [];
   valueSet : string [];
}
