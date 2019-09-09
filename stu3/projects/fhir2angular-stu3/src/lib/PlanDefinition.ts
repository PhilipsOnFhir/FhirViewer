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
   type : CodeableConcept ;
   status : PublicationStatusEnum ;
   experimental : boolean ;
   date : string ;
   publisher : string ;
   description : string ;
   purpose : string ;
   usage : string ;
   approvalDate : string ;
   lastReviewDate : string ;
   effectivePeriod : Period ;
   useContext : UsageContext [];
   jurisdiction : CodeableConcept [];
   topic : CodeableConcept [];
   contributor : Contributor [];
   contact : ContactDetail [];
   copyright : string ;
   relatedArtifact : RelatedArtifact [];
   library : Reference [];
   goal : PlanDefinition_Goal [];
   action : PlanDefinition_Action [];
}
