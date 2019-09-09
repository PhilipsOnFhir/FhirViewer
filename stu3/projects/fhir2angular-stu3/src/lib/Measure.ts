import { CodeableConcept } from './CodeableConcept'
import { ContactDetail } from './ContactDetail'
import { Contributor } from './Contributor'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { Measure_Group } from './Measure_Group'
import { Measure_SupplementalData } from './Measure_SupplementalData'
import { Period } from './Period'
import { PublicationStatusEnum } from './PublicationStatusEnum'
import { Reference } from './Reference'
import { RelatedArtifact } from './RelatedArtifact'
import { UsageContext } from './UsageContext'

export class Measure      extends DomainResource
{

   static def : string = 'Measure';
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
   library : Reference [];
   disclaimer : string ;
   scoring : CodeableConcept ;
   compositeScoring : CodeableConcept ;
   type : CodeableConcept [];
   riskAdjustment : string ;
   rateAggregation : string ;
   rationale : string ;
   clinicalRecommendationStatement : string ;
   improvementNotation : string ;
   definition : string [];
   guidance : string ;
   set : string ;
   group : Measure_Group [];
   supplementalData : Measure_SupplementalData [];
}
