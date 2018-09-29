import { Annotation } from './Annotation'
import { CodeableConcept } from './CodeableConcept'
import { ContactPoint } from './ContactPoint'
import { Device_Udi } from './Device_Udi'
import { DomainResource } from './DomainResource'
import { FHIRDeviceStatusEnum } from './FHIRDeviceStatusEnum'
import { Identifier } from './Identifier'
import { Reference } from './Reference'

export class Device      extends DomainResource
{

   static def : string = 'Device';
   identifier : Identifier [];
   udi : Device_Udi ;
   status : FHIRDeviceStatusEnum ;
   type : CodeableConcept ;
   lotNumber : string ;
   manufacturer : string ;
   manufactureDate : string ;
   expirationDate : string ;
   model : string ;
   version : string ;
   patient : Reference ;
   owner : Reference ;
   contact : ContactPoint [];
   location : Reference ;
   url : string ;
   note : Annotation [];
   safety : CodeableConcept [];
}
