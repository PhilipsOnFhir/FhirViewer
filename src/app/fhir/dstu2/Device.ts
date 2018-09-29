import { Annotation } from './Annotation'
import { CodeableConcept } from './CodeableConcept'
import { ContactPoint } from './ContactPoint'
import { DeviceStatusEnum } from './DeviceStatusEnum'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { Reference } from './Reference'

export class Device      extends DomainResource
{

   static def : string = 'Device';
   identifier : Identifier [];
   type : CodeableConcept ;
   note : Annotation [];
   status : DeviceStatusEnum ;
   manufacturer : string ;
   model : string ;
   version : string ;
   manufactureDate : string ;
   expiry : string ;
   udi : string ;
   lotNumber : string ;
   owner : Reference ;
   location : Reference ;
   patient : Reference ;
   contact : ContactPoint [];
   url : string ;
}
