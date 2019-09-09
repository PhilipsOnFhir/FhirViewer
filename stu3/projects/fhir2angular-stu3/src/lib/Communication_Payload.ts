import { Attachment } from './Attachment'
import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'

export class Communication_Payload      extends BackboneElement
{

   static def : string = 'Communication_Payload';
   contentString : string ;
   contentAttachment : Attachment ;
   contentReference : Reference ;
}
