import { Attachment } from './Attachment'
import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'

export class CommunicationRequest_Payload      extends BackboneElement
{

   static def : string = 'CommunicationRequest_Payload';
   contentString : string ;
   contentAttachment : Attachment ;
   contentReference : Reference ;
}
