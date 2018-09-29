import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Period } from './Period'
import { Reference } from './Reference'

export class Practitioner_PractitionerRole      extends BackboneElement
{

   static def : string = 'Practitioner_PractitionerRole';
   managingOrganization : Reference ;
   role : CodeableConcept ;
   specialty : CodeableConcept [];
   period : Period ;
   location : Reference [];
   healthcareService : Reference [];
}
