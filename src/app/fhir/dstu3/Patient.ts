import { Address } from './Address'
import { AdministrativeGenderEnum } from './AdministrativeGenderEnum'
import { Attachment } from './Attachment'
import { CodeableConcept } from './CodeableConcept'
import { ContactPoint } from './ContactPoint'
import { DomainResource } from './DomainResource'
import { HumanName } from './HumanName'
import { Identifier } from './Identifier'
import { Patient_Animal } from './Patient_Animal'
import { Patient_Communication } from './Patient_Communication'
import { Patient_Contact } from './Patient_Contact'
import { Patient_Link } from './Patient_Link'
import { Reference } from './Reference'

export class Patient      extends DomainResource
{

   static def : string = 'Patient';
   identifier : Identifier [];
   active : string ;
   name : HumanName [];
   telecom : ContactPoint [];
   gender : AdministrativeGenderEnum ;
   birthDate : string ;
   deceasedBoolean : string ;
   deceasedDateTime : string ;
   address : Address [];
   maritalStatus : CodeableConcept ;
   multipleBirthBoolean : string ;
   multipleBirthInteger : string ;
   photo : Attachment [];
   contact : Patient_Contact [];
   animal : Patient_Animal ;
   communication : Patient_Communication [];
   generalPractitioner : Reference [];
   managingOrganization : Reference ;
   link : Patient_Link [];
}
