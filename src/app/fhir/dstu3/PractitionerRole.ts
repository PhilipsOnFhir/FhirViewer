import { CodeableConcept } from './CodeableConcept'
import { ContactPoint } from './ContactPoint'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { Period } from './Period'
import { PractitionerRole_AvailableTime } from './PractitionerRole_AvailableTime'
import { PractitionerRole_NotAvailable } from './PractitionerRole_NotAvailable'
import { Reference } from './Reference'

export class PractitionerRole      extends DomainResource
{

   static def : string = 'PractitionerRole';
   identifier : Identifier [];
   active : string ;
   period : Period ;
   practitioner : Reference ;
   organization : Reference ;
   code : CodeableConcept [];
   specialty : CodeableConcept [];
   location : Reference [];
   healthcareService : Reference [];
   telecom : ContactPoint [];
   availableTime : PractitionerRole_AvailableTime [];
   notAvailable : PractitionerRole_NotAvailable [];
   availabilityExceptions : string ;
   endpoint : Reference [];
}
