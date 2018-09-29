import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Narrative } from './Narrative'
import { Reference } from './Reference'

export class Composition_Section      extends BackboneElement
{

   static def : string = 'Composition_Section';
   title : string ;
   code : CodeableConcept ;
   text : Narrative ;
   mode : string ;
   orderedBy : CodeableConcept ;
   entry : Reference [];
   emptyReason : CodeableConcept ;
   section : Composition_Section [];
}
