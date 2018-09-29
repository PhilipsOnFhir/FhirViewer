import { Address } from './Address'
import { CodeableConcept } from './CodeableConcept'
import { ContactPoint } from './ContactPoint'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { Organization_Contact } from './Organization_Contact'
import { Reference } from './Reference'

export class Organization      extends DomainResource
{

   static def : string = 'Organization';
   identifier : Identifier [];
   active : string ;
   type : CodeableConcept ;
   name : string ;
   telecom : ContactPoint [];
   address : Address [];
   partOf : Reference ;
   contact : Organization_Contact [];
}
