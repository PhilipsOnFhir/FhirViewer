import { DomainResource } from './DomainResource'
import { Element } from './Element'

export class Money      extends Element
{

   static def : string = 'Money';
   value : string ;
   currency : string ;
}
