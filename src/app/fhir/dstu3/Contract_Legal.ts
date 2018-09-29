import { Attachment } from './Attachment'
import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'

export class Contract_Legal      extends BackboneElement
{

   static def : string = 'Contract_Legal';
   contentAttachment : Attachment ;
   contentReference : Reference ;
}
