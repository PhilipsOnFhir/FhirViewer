import { ActivityDefinition_DynamicValue } from './ActivityDefinition_DynamicValue'
import { ActivityDefinition_Participant } from './ActivityDefinition_Participant'
import { CodeableConcept } from './CodeableConcept'
import { ContactDetail } from './ContactDetail'
import { Contributor } from './Contributor'
import { DomainResource } from './DomainResource'
import { Dosage } from './Dosage'
import { Identifier } from './Identifier'
import { Period } from './Period'
import { PublicationStatusEnum } from './PublicationStatusEnum'
import { Quantity } from './Quantity'
import { Range } from './Range'
import { Reference } from './Reference'
import { RelatedArtifact } from './RelatedArtifact'
import { ResourceTypeEnum } from './ResourceTypeEnum'
import { Timing } from './Timing'
import { UsageContext } from './UsageContext'

export class ActivityDefinition      extends DomainResource
{

   static def : string = 'ActivityDefinition';
   url : string ;
   identifier : Identifier [];
   version : string ;
   name : string ;
   title : string ;
   status : PublicationStatusEnum ;
   experimental : string ;
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
   kind : ResourceTypeEnum ;
   code : CodeableConcept ;
   timingTiming : Timing ;
   timingDateTime : string ;
   timingPeriod : Period ;
   timingRange : Range ;
   location : Reference ;
   participant : ActivityDefinition_Participant [];
   productReference : Reference ;
   productCodeableConcept : CodeableConcept ;
   quantity : Quantity ;
   dosage : Dosage [];
   bodySite : CodeableConcept [];
   transform : Reference ;
   dynamicValue : ActivityDefinition_DynamicValue [];
}
