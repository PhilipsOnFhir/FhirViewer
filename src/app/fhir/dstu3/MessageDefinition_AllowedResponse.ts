import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'

export class MessageDefinition_AllowedResponse      extends BackboneElement
{

   static def : string = 'MessageDefinition_AllowedResponse';
   message : Reference ;
   situation : string ;
}
