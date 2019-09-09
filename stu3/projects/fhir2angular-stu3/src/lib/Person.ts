import { Address } from './Address'
import { AdministrativeGenderEnum } from './AdministrativeGenderEnum'
import { Attachment } from './Attachment'
import { ContactPoint } from './ContactPoint'
import { DomainResource } from './DomainResource'
import { HumanName } from './HumanName'
import { Identifier } from './Identifier'
import { Person_Link } from './Person_Link'
import { Reference } from './Reference'

export class Person      extends DomainResource
{

   static def : string = 'Person';
   identifier : Identifier [];
   name : HumanName [];
   telecom : ContactPoint [];
   gender : AdministrativeGenderEnum ;
   birthDate : string ;
   address : Address [];
   photo : Attachment ;
   managingOrganization : Reference ;
   active : boolean ;
   link : Person_Link [];
}
