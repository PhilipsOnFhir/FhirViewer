import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { ModuleMetadataContributorTypeEnum } from './ModuleMetadataContributorTypeEnum'
import { Reference } from './Reference'

export class ModuleMetadata_Contributor      extends BackboneElement
{

   static def : string = 'ModuleMetadata_Contributor';
   type : ModuleMetadataContributorTypeEnum ;
   party : Reference ;
}
