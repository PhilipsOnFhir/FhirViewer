import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { TestScript_Action1 } from './TestScript_Action1'
import { TestScript_Metadata } from './TestScript_Metadata'

export class TestScript_Test      extends BackboneElement
{

   static def : string = 'TestScript_Test';
   name : string ;
   description : string ;
   metadata : TestScript_Metadata ;
   action : TestScript_Action1 [];
}
