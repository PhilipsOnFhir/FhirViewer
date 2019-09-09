import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Element } from './Element'
import { Timing_Repeat } from './Timing_Repeat'

export class Timing      extends Element
{

   static def : string = 'Timing';
   event : string [];
   repeat : Timing_Repeat ;
   code : CodeableConcept ;
}
