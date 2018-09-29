import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { TestScript_Action1 } from './TestScript_Action1'

export class TestScript_Test      extends BackboneElement
{

   static def : string = 'TestScript_Test';
   name : string ;
   description : string ;
   action : TestScript_Action1 [];
}
