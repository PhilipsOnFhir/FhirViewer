import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { TestReport_Operation } from './TestReport_Operation'

export class TestReport_Action2      extends BackboneElement
{

   static def : string = 'TestReport_Action2';
   operation : TestReport_Operation ;
}
