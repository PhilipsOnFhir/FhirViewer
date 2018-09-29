import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { TestReport_Assert } from './TestReport_Assert'
import { TestReport_Operation } from './TestReport_Operation'

export class TestReport_Action      extends BackboneElement
{

   static def : string = 'TestReport_Action';
   operation : TestReport_Operation ;
   assert : TestReport_Assert ;
}
