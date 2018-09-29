import { BackboneElement } from './BackboneElement'
import { ConceptMap_Target } from './ConceptMap_Target'
import { DomainResource } from './DomainResource'

export class ConceptMap_Element      extends BackboneElement
{

   static def : string = 'ConceptMap_Element';
   codeSystem : string ;
   code : string ;
   target : ConceptMap_Target [];
}
