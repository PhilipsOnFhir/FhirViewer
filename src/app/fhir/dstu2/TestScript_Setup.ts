import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { TestScript_Action } from './TestScript_Action'
import { TestScript_Metadata } from './TestScript_Metadata'

export class TestScript_Setup      extends BackboneElement
{

   static def : string = 'TestScript_Setup';
   metadata : TestScript_Metadata ;
   action : TestScript_Action [];
}
