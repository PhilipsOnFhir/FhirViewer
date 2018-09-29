import { Attachment } from './Attachment'
import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'

export class DocumentManifest_Content      extends BackboneElement
{

   static def : string = 'DocumentManifest_Content';
   pAttachment : Attachment ;
   pReference : Reference ;
}
