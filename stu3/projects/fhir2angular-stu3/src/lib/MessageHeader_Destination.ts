import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'

export class MessageHeader_Destination      extends BackboneElement
{

   static def : string = 'MessageHeader_Destination';
   name : string ;
   target : Reference ;
   endpoint : string ;
}
