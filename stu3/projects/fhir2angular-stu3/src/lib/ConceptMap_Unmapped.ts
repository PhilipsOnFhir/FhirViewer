import { BackboneElement } from './BackboneElement'
import { ConceptMapGroupUnmappedModeEnum } from './ConceptMapGroupUnmappedModeEnum'
import { DomainResource } from './DomainResource'

export class ConceptMap_Unmapped      extends BackboneElement
{

   static def : string = 'ConceptMap_Unmapped';
   mode : ConceptMapGroupUnmappedModeEnum ;
   code : string ;
   display : string ;
   url : string ;
}
