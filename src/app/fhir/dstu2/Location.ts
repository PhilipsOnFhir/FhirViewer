import { Address } from './Address'
import { CodeableConcept } from './CodeableConcept'
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
   name : string ;
   description : string ;
   mode : LocationModeEnum ;
   type : CodeableConcept ;
   telecom : ContactPoint [];
   address : Address ;
   physicalType : CodeableConcept ;
   position : Location_Position ;
   managingOrganization : Reference ;
   partOf : Reference ;
}
