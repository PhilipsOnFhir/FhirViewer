import { Coding } from './Coding'
import { DomainResource } from './DomainResource'
import { Element } from './Element'

export class DataRequirement_CodeFilter      extends Element
{

   static def : string = 'DataRequirement_CodeFilter';
   path : string ;
   valueSet : string ;
   code : Coding [];
}
