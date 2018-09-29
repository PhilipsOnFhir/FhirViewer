import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'
import { ResponseTypeEnum } from './ResponseTypeEnum'

export class MessageHeader_Response      extends BackboneElement
{

   static def : string = 'MessageHeader_Response';
   identifier : string ;
   code : ResponseTypeEnum ;
   details : Reference ;
}
