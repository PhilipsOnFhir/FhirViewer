import { Attachment } from './Attachment'
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
import { UsageContext } from './UsageContext'

export class Library      extends DomainResource
{

   static def : string = 'Library';
   url : string ;
   identifier : Identifier [];
   version : string ;
   name : string ;
   title : string ;
   status : PublicationStatusEnum ;
   experimental : boolean ;
   type : CodeableConcept ;
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
   parameter : ParameterDefinition [];
   dataRequirement : DataRequirement [];
   content : Attachment [];
}
