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
   eventCoding : Coding ;
   eventUri : string ;
   destination : MessageHeader_Destination [];
   sender : Reference ;
   enterer : Reference ;
   author : Reference ;
   source : MessageHeader_Source ;
   responsible : Reference ;
   reason : CodeableConcept ;
   response : MessageHeader_Response ;
   focus : Reference [];
   definition : string ;
}
