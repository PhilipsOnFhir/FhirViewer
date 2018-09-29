import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { TestReport_Action } from './TestReport_Action'

export class TestReport_Setup      extends BackboneElement
{

   static def : string = 'TestReport_Setup';
   action : TestReport_Action [];
}
