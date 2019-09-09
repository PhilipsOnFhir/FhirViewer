import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'
import { TestScript_Param } from './TestScript_Param'

export class TestScript_Rule      extends BackboneElement
{

   static def : string = 'TestScript_Rule';
   resource : Reference ;
   param : TestScript_Param [];
}
