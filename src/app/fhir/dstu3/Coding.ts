import { DomainResource } from './DomainResource'
import { Element } from './Element'

export class Coding      extends Element
{

   static def : string = 'Coding';
   system : string ;
   version : string ;
   code : string ;
   display : string ;
   userSelected : string ;
}
