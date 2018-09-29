import { DomainResource } from './DomainResource'
import { Element } from './Element'

export class Reference      extends Element
{

   static def : string = 'Reference';
   reference : string ;
   display : string ;
}
