import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { ModuleMetadataFocusTypeEnum } from './ModuleMetadataFocusTypeEnum'

export class ModuleMetadata_Coverage      extends BackboneElement
{

   static def : string = 'ModuleMetadata_Coverage';
   focus : ModuleMetadataFocusTypeEnum ;
   description : string ;
   value : CodeableConcept ;
}
