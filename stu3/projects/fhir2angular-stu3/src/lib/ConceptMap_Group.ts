import { BackboneElement } from './BackboneElement'
import { ConceptMap_Element } from './ConceptMap_Element'
import { ConceptMap_Unmapped } from './ConceptMap_Unmapped'
import { DomainResource } from './DomainResource'

export class ConceptMap_Group      extends BackboneElement
{

   static def : string = 'ConceptMap_Group';
   source : string ;
   sourceVersion : string ;
   target : string ;
   targetVersion : string ;
   element : ConceptMap_Element [];
   unmapped : ConceptMap_Unmapped ;
}
