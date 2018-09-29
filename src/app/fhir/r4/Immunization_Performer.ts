import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'

export class Immunization_Performer      extends BackboneElement
{

   static def : string = 'Immunization_Performer';
   function : CodeableConcept ;
   actor : Reference ;
}
