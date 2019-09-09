import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { ModuleMetadataStatusEnum } from './ModuleMetadataStatusEnum'
import { ModuleMetadataTypeEnum } from './ModuleMetadataTypeEnum'
import { ModuleMetadata_Contributor } from './ModuleMetadata_Contributor'
import { ModuleMetadata_Coverage } from './ModuleMetadata_Coverage'
import { ModuleMetadata_RelatedResource } from './ModuleMetadata_RelatedResource'
import { Period } from './Period'
import { Reference } from './Reference'

export class ModuleMetadata      extends DomainResource
{

   static def : string = 'ModuleMetadata';
   identifier : Identifier [];
   version : string ;
   title : string ;
   type : ModuleMetadataTypeEnum ;
   status : ModuleMetadataStatusEnum ;
   description : string ;
   purpose : string ;
   usage : string ;
   publicationDate : string ;
   lastReviewDate : string ;
   effectivePeriod : Period ;
   coverage : ModuleMetadata_Coverage [];
   topic : CodeableConcept [];
   keyword : string [];
   contributor : ModuleMetadata_Contributor [];
   publisher : Reference ;
   steward : Reference ;
   rightsDeclaration : string ;
   relatedResource : ModuleMetadata_RelatedResource [];
}
