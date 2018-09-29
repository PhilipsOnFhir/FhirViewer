import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'

export class Sequence_ReferenceSeq      extends BackboneElement
{

   static def : string = 'Sequence_ReferenceSeq';
   chromosome : CodeableConcept ;
   genomeBuild : string ;
   orientation : string ;
   referenceSeqId : CodeableConcept ;
   referenceSeqPointer : Reference ;
   referenceSeqString : string ;
   strand : string ;
   windowStart : string ;
   windowEnd : string ;
}
