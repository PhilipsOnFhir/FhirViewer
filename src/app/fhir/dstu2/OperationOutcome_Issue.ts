import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { IssueSeverityEnum } from './IssueSeverityEnum'
import { IssueTypeEnum } from './IssueTypeEnum'

export class OperationOutcome_Issue      extends BackboneElement
{

   static def : string = 'OperationOutcome_Issue';
   severity : IssueSeverityEnum ;
   code : IssueTypeEnum ;
   details : CodeableConcept ;
   diagnostics : string ;
   location : string [];
}
