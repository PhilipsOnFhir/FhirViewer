import { Address } from './Address'
import { Attachment } from './Attachment'
import { CodeableConcept } from './CodeableConcept'
import { ContactPoint } from './ContactPoint'
import { DomainResource } from './DomainResource'
import { HumanName } from './HumanName'
import { Identifier } from './Identifier'
import { Period } from './Period'
import { Reference } from './Reference'

export class RelatedPerson      extends DomainResource
{

   static def : string = 'RelatedPerson';
   identifier : Identifier [];
   patient : Reference ;
   relationship : CodeableConcept ;
   name : HumanName ;
   telecom : ContactPoint [];
   gender : string ;
   birthDate : string ;
   address : Address [];
   photo : Attachment [];
   period : Period ;
}
