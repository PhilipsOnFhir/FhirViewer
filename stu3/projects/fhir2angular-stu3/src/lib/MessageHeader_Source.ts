import { BackboneElement } from './BackboneElement'
import { ContactPoint } from './ContactPoint'
import { DomainResource } from './DomainResource'

export class MessageHeader_Source      extends BackboneElement
{

   static def : string = 'MessageHeader_Source';
   name : string ;
   software : string ;
   version : string ;
   contact : ContactPoint ;
   endpoint : string ;
}
