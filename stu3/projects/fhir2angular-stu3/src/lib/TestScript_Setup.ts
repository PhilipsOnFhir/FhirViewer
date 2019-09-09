import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { TestScript_Action } from './TestScript_Action'

export class TestScript_Setup      extends BackboneElement
{

   static def : string = 'TestScript_Setup';
   action : TestScript_Action [];
}
