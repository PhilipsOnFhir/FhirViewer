import { Address } from './Address'
import { AdministrativeGenderEnum } from './AdministrativeGenderEnum'
import { Attachment } from './Attachment'
import { CodeableConcept } from './CodeableConcept'
import { ContactPoint } from './ContactPoint'
import { DomainResource } from './DomainResource'
import { HumanName } from './HumanName'
import { Identifier } from './Identifier'
import { Practitioner_Qualification } from './Practitioner_Qualification'

export class Practitioner      extends DomainResource
{

   static def : string = 'Practitioner';
   identifier : Identifier [];
   active : string ;
   name : HumanName [];
   telecom : ContactPoint [];
   address : Address [];
   gender : AdministrativeGenderEnum ;
   birthDate : string ;
   photo : Attachment [];
   qualification : Practitioner_Qualification [];
   communication : CodeableConcept [];
}
