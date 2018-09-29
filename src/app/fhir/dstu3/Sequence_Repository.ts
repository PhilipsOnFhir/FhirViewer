import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'

export class Sequence_Repository      extends BackboneElement
{

   static def : string = 'Sequence_Repository';
   type : string ;
   url : string ;
   name : string ;
   datasetId : string ;
   variantsetId : string ;
   readsetId : string ;
}
