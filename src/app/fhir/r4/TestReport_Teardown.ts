import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { TestReport_Action2 } from './TestReport_Action2'

export class TestReport_Teardown      extends BackboneElement
{

   static def : string = 'TestReport_Teardown';
   action : TestReport_Action2 [];
}
