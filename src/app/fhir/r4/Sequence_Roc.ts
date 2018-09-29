import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'

export class Sequence_Roc      extends BackboneElement
{

   static def : string = 'Sequence_Roc';
   score : string [];
   numTP : string [];
   numFP : string [];
   numFN : string [];
   precision : string [];
   sensitivity : string [];
   fMeasure : string [];
}
