import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { TestScript_Action2 } from './TestScript_Action2'

export class TestScript_Teardown      extends BackboneElement
{

   static def : string = 'TestScript_Teardown';
   action : TestScript_Action2 [];
}
