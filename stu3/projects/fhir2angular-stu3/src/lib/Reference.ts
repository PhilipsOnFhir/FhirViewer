import { DomainResource } from './DomainResource'
import { Element } from './Element'
import { Identifier } from './Identifier'

export class Reference      extends Element
{

   static def : string = 'Reference';
   reference : string ;
   identifier : Identifier ;
   display : string ;
}
