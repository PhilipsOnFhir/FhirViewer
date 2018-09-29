import { BackboneElement } from './BackboneElement'
import { Coding } from './Coding'
import { DomainResource } from './DomainResource'

export class TestScript_Destination      extends BackboneElement
{

   static def : string = 'TestScript_Destination';
   index : string ;
   profile : Coding ;
}
