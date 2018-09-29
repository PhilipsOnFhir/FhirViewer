import { DomainResource } from './DomainResource'
import { Element } from './Element'

export class ElementDefinition_Base      extends Element
{

   static def : string = 'ElementDefinition_Base';
   path : string ;
   min : string ;
   max : string ;
}
