import { BackboneElement } from './BackboneElement'
import { Coding } from './Coding'
import { DomainResource } from './DomainResource'

export class CodeSystem_Designation      extends BackboneElement
{

   static def : string = 'CodeSystem_Designation';
   language : string ;
   use : Coding ;
   value : string ;
}
