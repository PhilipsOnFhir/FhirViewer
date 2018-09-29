import { CodeableConcept } from './CodeableConcept'
import { ContactDetail } from './ContactDetail'
import { Contributor } from './Contributor'
import { DataRequirement } from './DataRequirement'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { ParameterDefinition } from './ParameterDefinition'
import { Period } from './Period'
import { PublicationStatusEnum } from './PublicationStatusEnum'
import { RelatedArtifact } from './RelatedArtifact'
import { TriggerDefinition } from './TriggerDefinition'
import { UsageContext } from './UsageContext'

export class DecisionSupportServiceModule      extends DomainResource
{

   static def : string = 'DecisionSupportServiceModule';
   url : string ;
   identifier : Identifier [];
   version : string ;
   name : string ;
   title : string ;
   status : PublicationStatusEnum ;
   experimental : string ;
   date : string ;
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
   publisher : string ;
   contact : ContactDetail [];
   copyright : string ;
   relatedArtifact : RelatedArtifact [];
   trigger : TriggerDefinition [];
   parameter : ParameterDefinition [];
   dataRequirement : DataRequirement [];
}
