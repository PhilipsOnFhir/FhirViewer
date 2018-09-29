import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { ListModeEnum } from './ListModeEnum'
import { Narrative } from './Narrative'
import { Reference } from './Reference'

export class Composition_Section      extends BackboneElement
{

   static def : string = 'Composition_Section';
   title : string ;
   code : CodeableConcept ;
   text : Narrative ;
   mode : ListModeEnum ;
   orderedBy : CodeableConcept ;
   entry : Reference [];
   emptyReason : CodeableConcept ;
   section : Composition_Section [];
}
