import { Annotation } from './Annotation'
import { CodeableConcept } from './CodeableConcept'
import { ContactDetail } from './ContactDetail'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { Period } from './Period'
import { Reference } from './Reference'
import { RelatedArtifact } from './RelatedArtifact'
import { ResearchStudyStatusEnum } from './ResearchStudyStatusEnum'
import { ResearchStudy_Arm } from './ResearchStudy_Arm'
import { ResearchStudy_Objective } from './ResearchStudy_Objective'

export class ResearchStudy      extends DomainResource
{

   static def : string = 'ResearchStudy';
   identifier : Identifier [];
   title : string ;
   protocol : Reference [];
   partOf : Reference [];
   status : ResearchStudyStatusEnum ;
   primaryPurposeType : CodeableConcept ;
   phase : CodeableConcept ;
   category : CodeableConcept [];
   focus : CodeableConcept [];
   condition : Reference [];
   contact : ContactDetail [];
   relatedArtifact : RelatedArtifact [];
   keyword : CodeableConcept [];
   location : CodeableConcept [];
   description : string ;
   enrollment : Reference [];
   period : Period ;
   sponsor : Reference ;
   principalInvestigator : Reference ;
   site : Reference [];
   reasonStopped : CodeableConcept ;
   note : Annotation [];
   arm : ResearchStudy_Arm [];
   objective : ResearchStudy_Objective [];
}
