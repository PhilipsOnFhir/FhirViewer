import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'

export class Provenance_RelatedAgent      extends BackboneElement
{

   static def : string = 'Provenance_RelatedAgent';
   type : CodeableConcept ;
   target : string ;
}
