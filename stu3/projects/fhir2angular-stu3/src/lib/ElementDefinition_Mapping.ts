import { DomainResource } from './DomainResource'
import { Element } from './Element'

export class ElementDefinition_Mapping      extends Element
{

   static def : string = 'ElementDefinition_Mapping';
   identity : string ;
   language : string ;
   map : string ;
   comment : string ;
}
