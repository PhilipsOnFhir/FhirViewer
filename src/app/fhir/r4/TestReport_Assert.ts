import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { TestReportActionResultEnum } from './TestReportActionResultEnum'

export class TestReport_Assert      extends BackboneElement
{

   static def : string = 'TestReport_Assert';
   result : TestReportActionResultEnum ;
   message : string ;
   detail : string ;
}
