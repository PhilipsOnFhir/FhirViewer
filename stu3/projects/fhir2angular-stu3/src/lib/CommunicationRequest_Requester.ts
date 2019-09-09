import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'

export class CommunicationRequest_Requester      extends BackboneElement
{

   static def : string = 'CommunicationRequest_Requester';
   agent : Reference ;
   onBehalfOf : Reference ;
}
