import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'

export class Provenance_Agent      extends BackboneElement
{

   static def : string = 'Provenance_Agent';
   role : CodeableConcept [];
   whoUri : string ;
   whoReference : Reference ;
   onBehalfOfUri : string ;
   onBehalfOfReference : Reference ;
   relatedAgentType : CodeableConcept ;
}
