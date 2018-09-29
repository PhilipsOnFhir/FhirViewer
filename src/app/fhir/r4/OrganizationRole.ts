import { CodeableConcept } from './CodeableConcept'
import { ContactPoint } from './ContactPoint'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { OrganizationRole_AvailableTime } from './OrganizationRole_AvailableTime'
import { OrganizationRole_NotAvailable } from './OrganizationRole_NotAvailable'
import { Period } from './Period'
import { Reference } from './Reference'

export class OrganizationRole      extends DomainResource
{

   static def : string = 'OrganizationRole';
   identifier : Identifier [];
   active : string ;
   period : Period ;
   organization : Reference ;
   participatingOrganization : Reference ;
   network : Reference [];
   code : CodeableConcept [];
   specialty : CodeableConcept [];
   location : Reference [];
   healthcareService : Reference [];
   telecom : ContactPoint [];
   availableTime : OrganizationRole_AvailableTime [];
   notAvailable : OrganizationRole_NotAvailable [];
   availabilityExceptions : string ;
   endpoint : Reference [];
}
