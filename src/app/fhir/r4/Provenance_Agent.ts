import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { Reference } from './Reference'

export class Provenance_Agent      extends BackboneElement
{

   static def : string = 'Provenance_Agent';
   type : CodeableConcept ;
   role : CodeableConcept [];
   whoIdentifier : Identifier ;
   whoReference : Reference ;
   onBehalfOfIdentifier : Identifier ;
   onBehalfOfReference : Reference ;
}
