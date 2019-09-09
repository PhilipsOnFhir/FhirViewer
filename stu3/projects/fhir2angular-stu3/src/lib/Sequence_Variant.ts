import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'

export class Sequence_Variant      extends BackboneElement
{

   static def : string = 'Sequence_Variant';
   start : string ;
   end : string ;
   observedAllele : string ;
   referenceAllele : string ;
   cigar : string ;
   variantPointer : Reference ;
}
