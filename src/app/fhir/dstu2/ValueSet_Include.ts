import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { ValueSet_Concept1 } from './ValueSet_Concept1'
import { ValueSet_Filter } from './ValueSet_Filter'

export class ValueSet_Include      extends BackboneElement
{

   static def : string = 'ValueSet_Include';
   system : string ;
   version : string ;
   concept : ValueSet_Concept1 [];
   filter : ValueSet_Filter [];
}
