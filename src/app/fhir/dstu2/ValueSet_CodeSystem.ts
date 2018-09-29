import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { ValueSet_Concept } from './ValueSet_Concept'

export class ValueSet_CodeSystem      extends BackboneElement
{

   static def : string = 'ValueSet_CodeSystem';
   system : string ;
   version : string ;
   caseSensitive : string ;
   concept : ValueSet_Concept [];
}
