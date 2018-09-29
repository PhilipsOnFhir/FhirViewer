import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'

export class Immunization_Practitioner      extends BackboneElement
{

   static def : string = 'Immunization_Practitioner';
   role : CodeableConcept ;
   actor : Reference ;
}
