import { Attachment } from './Attachment'
import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'

export class Contract_Rule      extends BackboneElement
{

   static def : string = 'Contract_Rule';
   contentAttachment : Attachment ;
   contentReference : Reference ;
}
