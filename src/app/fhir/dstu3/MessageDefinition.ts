import { CodeableConcept } from './CodeableConcept'
import { Coding } from './Coding'
import { ContactDetail } from './ContactDetail'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { MessageDefinition_AllowedResponse } from './MessageDefinition_AllowedResponse'
import { MessageDefinition_Focus } from './MessageDefinition_Focus'
import { MessageSignificanceCategoryEnum } from './MessageSignificanceCategoryEnum'
import { PublicationStatusEnum } from './PublicationStatusEnum'
import { Reference } from './Reference'
import { UsageContext } from './UsageContext'

export class MessageDefinition      extends DomainResource
{

   static def : string = 'MessageDefinition';
   url : string ;
   identifier : Identifier ;
   version : string ;
   name : string ;
   title : string ;
   status : PublicationStatusEnum ;
   experimental : string ;
   date : string ;
   publisher : string ;
   contact : ContactDetail [];
   description : string ;
   useContext : UsageContext [];
   jurisdiction : CodeableConcept [];
   purpose : string ;
   copyright : string ;
   base : Reference ;
   parent : Reference [];
   replaces : Reference [];
   event : Coding ;
   category : MessageSignificanceCategoryEnum ;
   focus : MessageDefinition_Focus [];
   responseRequired : string ;
   allowedResponse : MessageDefinition_AllowedResponse [];
}
