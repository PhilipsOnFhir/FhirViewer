import { CodeableConcept } from './CodeableConcept'
import { DetectedIssueSeverityEnum } from './DetectedIssueSeverityEnum'
import { DetectedIssue_Mitigation } from './DetectedIssue_Mitigation'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { ObservationStatusEnum } from './ObservationStatusEnum'
import { Reference } from './Reference'

export class DetectedIssue      extends DomainResource
{

   static def : string = 'DetectedIssue';
   identifier : Identifier [];
   status : ObservationStatusEnum ;
   category : CodeableConcept ;
   severity : DetectedIssueSeverityEnum ;
   patient : Reference ;
   date : string ;
   author : Reference ;
   implicated : Reference [];
   detail : string ;
   reference : string ;
   mitigation : DetectedIssue_Mitigation [];
}
