import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { TestReportActionResultEnum } from './TestReportActionResultEnum'

export class TestReport_Operation      extends BackboneElement
{

   static def : string = 'TestReport_Operation';
   result : TestReportActionResultEnum ;
   message : string ;
   detail : string ;
}
