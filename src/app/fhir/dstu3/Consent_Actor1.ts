import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'

export class Consent_Actor1      extends BackboneElement
{

   static def : string = 'Consent_Actor1';
   role : CodeableConcept ;
   reference : Reference ;
}
