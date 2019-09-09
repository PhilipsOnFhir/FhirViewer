import { DomainResource } from './DomainResource'
import { Element } from './Element'
import { Reference } from './Reference'

export class Annotation      extends Element
{

   static def : string = 'Annotation';
   authorReference : Reference ;
   authorString : string ;
   time : string ;
   text : string ;
}
