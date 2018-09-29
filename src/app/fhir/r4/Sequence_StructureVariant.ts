import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { Sequence_Inner } from './Sequence_Inner'
import { Sequence_Outer } from './Sequence_Outer'

export class Sequence_StructureVariant      extends BackboneElement
{

   static def : string = 'Sequence_StructureVariant';
   precision : string ;
   reportedaCGHRatio : string ;
   length : string ;
   outer : Sequence_Outer ;
   inner : Sequence_Inner ;
}
