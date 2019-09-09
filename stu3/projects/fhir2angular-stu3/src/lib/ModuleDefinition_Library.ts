import { Attachment } from './Attachment'
import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'

export class ModuleDefinition_Library      extends BackboneElement
{

   static def : string = 'ModuleDefinition_Library';
   name : string ;
   identifier : string ;
   version : string ;
   documentAttachment : Attachment ;
   documentReference : Reference ;
}
