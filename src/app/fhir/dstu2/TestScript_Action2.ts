import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { TestScript_Operation } from './TestScript_Operation'

export class TestScript_Action2      extends BackboneElement
{

   static def : string = 'TestScript_Action2';
   operation : TestScript_Operation ;
}
