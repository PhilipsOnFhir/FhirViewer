import { Address } from './Address'
import { CodeableConcept } from './CodeableConcept'
import { Coding } from './Coding'
import { ContactPoint } from './ContactPoint'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { LocationModeEnum } from './LocationModeEnum'
import { LocationStatusEnum } from './LocationStatusEnum'
import { Location_Position } from './Location_Position'
import { Reference } from './Reference'

export class Location      extends DomainResource
{

   static def : string = 'Location';
   identifier : Identifier [];
   status : LocationStatusEnum ;
   operationalStatus : Coding ;
   name : string ;
   alias : string [];
   description : string ;
   mode : LocationModeEnum ;
   type : CodeableConcept ;
   telecom : ContactPoint [];
   address : Address ;
   physicalType : CodeableConcept ;
   position : Location_Position ;
   managingOrganization : Reference ;
   partOf : Reference ;
   endpoint : Reference [];
}
