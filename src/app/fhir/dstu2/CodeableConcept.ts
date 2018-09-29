import { Coding } from './Coding'
import { DomainResource } from './DomainResource'
import { Element } from './Element'

export class CodeableConcept      extends Element
{

   static def : string = 'CodeableConcept';
   coding : Coding [];
   text : string ;
}
