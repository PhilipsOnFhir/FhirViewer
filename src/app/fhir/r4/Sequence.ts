import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { Quantity } from './Quantity'
import { Reference } from './Reference'
import { Sequence_Quality } from './Sequence_Quality'
import { Sequence_ReferenceSeq } from './Sequence_ReferenceSeq'
import { Sequence_Repository } from './Sequence_Repository'
import { Sequence_StructureVariant } from './Sequence_StructureVariant'
import { Sequence_Variant } from './Sequence_Variant'

export class Sequence      extends DomainResource
{

   static def : string = 'Sequence';
   identifier : Identifier [];
   type : string ;
   coordinateSystem : string ;
   patient : Reference ;
   specimen : Reference ;
   device : Reference ;
   performer : Reference ;
   quantity : Quantity ;
   referenceSeq : Sequence_ReferenceSeq ;
   variant : Sequence_Variant [];
   observedSeq : string ;
   quality : Sequence_Quality [];
   readCoverage : string ;
   repository : Sequence_Repository [];
   pointer : Reference [];
   structureVariant : Sequence_StructureVariant [];
}
