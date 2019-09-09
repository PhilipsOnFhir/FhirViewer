import { CodeableConcept } from './CodeableConcept'
import { ContactDetail } from './ContactDetail'
import { Contributor } from './Contributor'
import { DataRequirement } from './DataRequirement'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { Period } from './Period'
import { PublicationStatusEnum } from './PublicationStatusEnum'
import { Reference } from './Reference'
import { RelatedArtifact } from './RelatedArtifact'
import { TriggerDefinition } from './TriggerDefinition'
import { UsageContext } from './UsageContext'

export class ServiceDefinition      extends DomainResource
{

   static def : string = 'ServiceDefinition';
   url : string ;
   identifier : Identifier [];
   version : string ;
   name : string ;
   title : string ;
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
   trigger : TriggerDefinition [];
   dataRequirement : DataRequirement [];
   operationDefinition : Reference ;
}
