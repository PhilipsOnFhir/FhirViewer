import { CodeableConcept } from './CodeableConcept'
import { DetectedIssueSeverityEnum } from './DetectedIssueSeverityEnum'
import { DetectedIssue_Mitigation } from './DetectedIssue_Mitigation'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { Reference } from './Reference'

export class DetectedIssue      extends DomainResource
{

   static def : string = 'DetectedIssue';
   patient : Reference ;
   category : CodeableConcept ;
   severity : DetectedIssueSeverityEnum ;
   implicated : Reference [];
   detail : string ;
   date : string ;
   author : Reference ;
   identifier : Identifier ;
   reference : string ;
   mitigation : DetectedIssue_Mitigation [];
}
