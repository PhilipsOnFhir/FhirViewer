import { CodeableConcept } from './CodeableConcept'
import { ContactDetail } from './ContactDetail'
import { Contributor } from './Contributor'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { Period } from './Period'
import { PlanDefinition_Action } from './PlanDefinition_Action'
import { PlanDefinition_Goal } from './PlanDefinition_Goal'
import { PublicationStatusEnum } from './PublicationStatusEnum'
import { Reference } from './Reference'
import { RelatedArtifact } from './RelatedArtifact'
import { UsageContext } from './UsageContext'

export class PlanDefinition      extends DomainResource
{

   static def : string = 'PlanDefinition';
   url : string ;
   identifier : Identifier [];
   version : string ;
   name : string ;
   title : string ;
   subtitle : string ;
   type : CodeableConcept ;
   status : PublicationStatusEnum ;
   experimental : string ;
   subjectCodeableConcept : CodeableConcept ;
   subjectReference : Reference ;
   date : string ;
   publisher : string ;
   contact : ContactDetail [];
   description : string ;
   useContext : UsageContext [];
   jurisdiction : CodeableConcept [];
   purpose : string ;
   usage : string ;
   copyright : string ;
   approvalDate : string ;
   lastReviewDate : string ;
   effectivePeriod : Period ;
   topic : CodeableConcept [];
   contributor : Contributor [];
   relatedArtifact : RelatedArtifact [];
   library : string [];
   goal : PlanDefinition_Goal [];
   action : PlanDefinition_Action [];
}
