import { DomainResource } from './DomainResource'
import { Element } from './Element'
import { Reference } from './Reference'

export class ParameterDefinition      extends Element
{

   static def : string = 'ParameterDefinition';
   name : string ;
   use : string ;
   min : string ;
   max : string ;
   documentation : string ;
   type : string ;
   profile : Reference ;
}
