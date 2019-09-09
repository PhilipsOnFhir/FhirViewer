import { BackboneElement } from './BackboneElement'
import { Coding } from './Coding'
import { DomainResource } from './DomainResource'

export class TestScript_Origin      extends BackboneElement
{

   static def : string = 'TestScript_Origin';
   index : string ;
   profile : Coding ;
}
