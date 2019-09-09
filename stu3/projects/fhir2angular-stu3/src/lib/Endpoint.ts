import { CodeableConcept } from './CodeableConcept'
import { Coding } from './Coding'
import { ContactPoint } from './ContactPoint'
import { DomainResource } from './DomainResource'
import { EndpointStatusEnum } from './EndpointStatusEnum'
import { Identifier } from './Identifier'
import { Period } from './Period'
import { Reference } from './Reference'

export class Endpoint      extends DomainResource
{

   static def : string = 'Endpoint';
   identifier : Identifier [];
   status : EndpointStatusEnum ;
   connectionType : Coding ;
   name : string ;
   managingOrganization : Reference ;
   contact : ContactPoint [];
   period : Period ;
   payloadType : CodeableConcept [];
   payloadMimeType : string [];
   address : string ;
   header : string [];
}
