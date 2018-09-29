import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { TestReportParticipantTypeEnum } from './TestReportParticipantTypeEnum'

export class TestReport_Participant      extends BackboneElement
{

   static def : string = 'TestReport_Participant';
   type : TestReportParticipantTypeEnum ;
   uri : string ;
   display : string ;
}
