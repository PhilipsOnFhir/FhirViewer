import { Address } from './Address'
import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { ContactPoint } from './ContactPoint'
import { DomainResource } from './DomainResource'
import { HumanName } from './HumanName'
import { Period } from './Period'
import { Reference } from './Reference'

export class Patient_Contact      extends BackboneElement
{

   static def : string = 'Patient_Contact';
   relationship : CodeableConcept [];
   name : HumanName ;
   telecom : ContactPoint [];
   address : Address ;
   gender : string ;
   organization : Reference ;
   period : Period ;
}
