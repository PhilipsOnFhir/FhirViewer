import { Address } from './Address'
import { Attachment } from './Attachment'
import { CodeableConcept } from './CodeableConcept'
import { ContactPoint } from './ContactPoint'
import { DomainResource } from './DomainResource'
import { HumanName } from './HumanName'
import { Identifier } from './Identifier'
import { Practitioner_PractitionerRole } from './Practitioner_PractitionerRole'
import { Practitioner_Qualification } from './Practitioner_Qualification'

export class Practitioner      extends DomainResource
{

   static def : string = 'Practitioner';
   identifier : Identifier [];
   active : string ;
   name : HumanName ;
   telecom : ContactPoint [];
   address : Address [];
   gender : string ;
   birthDate : string ;
   photo : Attachment [];
   practitionerRole : Practitioner_PractitionerRole [];
   qualification : Practitioner_Qualification [];
   communication : CodeableConcept [];
}
