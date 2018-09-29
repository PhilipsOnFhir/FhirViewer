import { Attachment } from './Attachment'
import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'

export class Contract_Friendly      extends BackboneElement
{

   static def : string = 'Contract_Friendly';
   contentAttachment : Attachment ;
   contentReference : Reference ;
}
