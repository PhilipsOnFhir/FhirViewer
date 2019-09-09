import { DomainResource } from './DomainResource'
import { Element } from './Element'

export class Period      extends Element
{

   static def : string = 'Period';
   start : string ;
   end : string ;
}
