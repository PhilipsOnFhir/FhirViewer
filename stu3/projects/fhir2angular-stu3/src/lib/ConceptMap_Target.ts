import { BackboneElement } from './BackboneElement'
import { ConceptMapEquivalenceEnum } from './ConceptMapEquivalenceEnum'
import { ConceptMap_DependsOn } from './ConceptMap_DependsOn'
import { DomainResource } from './DomainResource'

export class ConceptMap_Target      extends BackboneElement
{

   static def : string = 'ConceptMap_Target';
   code : string ;
   display : string ;
   equivalence : ConceptMapEquivalenceEnum ;
   comment : string ;
   dependsOn : ConceptMap_DependsOn [];
   product : ConceptMap_DependsOn [];
}
