import { BackboneElement } from './BackboneElement'
import { ConceptMap_DependsOn } from './ConceptMap_DependsOn'
import { DomainResource } from './DomainResource'

export class ConceptMap_Target      extends BackboneElement
{

   static def : string = 'ConceptMap_Target';
   codeSystem : string ;
   code : string ;
   equivalence : string ;
   comments : string ;
   dependsOn : ConceptMap_DependsOn [];
   product : ConceptMap_DependsOn [];
}
