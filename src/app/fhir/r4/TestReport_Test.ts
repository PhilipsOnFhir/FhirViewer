import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { TestReport_Action1 } from './TestReport_Action1'

export class TestReport_Test      extends BackboneElement
{

   static def : string = 'TestReport_Test';
   name : string ;
   description : string ;
   action : TestReport_Action1 [];
}
