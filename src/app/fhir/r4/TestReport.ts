import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { Reference } from './Reference'
import { TestReportResultEnum } from './TestReportResultEnum'
import { TestReportStatusEnum } from './TestReportStatusEnum'
import { TestReport_Participant } from './TestReport_Participant'
import { TestReport_Setup } from './TestReport_Setup'
import { TestReport_Teardown } from './TestReport_Teardown'
import { TestReport_Test } from './TestReport_Test'

export class TestReport      extends DomainResource
{

   static def : string = 'TestReport';
   identifier : Identifier ;
   name : string ;
   status : TestReportStatusEnum ;
   testScript : Reference ;
   result : TestReportResultEnum ;
   score : string ;
   tester : string ;
   issued : string ;
   participant : TestReport_Participant [];
   setup : TestReport_Setup ;
   test : TestReport_Test [];
   teardown : TestReport_Teardown ;
}
