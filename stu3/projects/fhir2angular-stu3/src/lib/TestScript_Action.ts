import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { TestScript_Assert } from './TestScript_Assert'
import { TestScript_Operation } from './TestScript_Operation'

export class TestScript_Action      extends BackboneElement
{

   static def : string = 'TestScript_Action';
   operation : TestScript_Operation ;
   assert : TestScript_Assert ;
}
