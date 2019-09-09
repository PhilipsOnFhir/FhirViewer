import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'

export class ConceptMap_DependsOn      extends BackboneElement
{

   static def : string = 'ConceptMap_DependsOn';
   property : string ;
   system : string ;
   code : string ;
   display : string ;
}
