import { Attachment } from './Attachment'
import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { ModuleMetadataResourceTypeEnum } from './ModuleMetadataResourceTypeEnum'

export class ModuleMetadata_RelatedResource      extends BackboneElement
{

   static def : string = 'ModuleMetadata_RelatedResource';
   type : ModuleMetadataResourceTypeEnum ;
   uri : string ;
   description : string ;
   document : Attachment ;
}
