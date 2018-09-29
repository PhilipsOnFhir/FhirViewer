import { BackboneElement } from './BackboneElement'
import { Coding } from './Coding'
import { DomainResource } from './DomainResource'

export class ValueSet_Designation      extends BackboneElement
{

   static def : string = 'ValueSet_Designation';
   language : string ;
   use : Coding ;
   value : string ;
}
