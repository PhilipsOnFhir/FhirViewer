import { CodeableConcept } from './CodeableConcept'
import { Coding } from './Coding'
import { DomainResource } from './DomainResource'
import { MessageHeader_Destination } from './MessageHeader_Destination'
import { MessageHeader_Response } from './MessageHeader_Response'
import { MessageHeader_Source } from './MessageHeader_Source'
import { Reference } from './Reference'

export class MessageHeader      extends DomainResource
{

   static def : string = 'MessageHeader';
   timestamp : string ;
   event : Coding ;
   response : MessageHeader_Response ;
   source : MessageHeader_Source ;
   destination : MessageHeader_Destination [];
   enterer : Reference ;
   author : Reference ;
   receiver : Reference ;
   responsible : Reference ;
   reason : CodeableConcept ;
   data : Reference [];
}
