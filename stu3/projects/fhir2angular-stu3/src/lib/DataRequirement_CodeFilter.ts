import { CodeableConcept } from './CodeableConcept'
import { Coding } from './Coding'
import { DomainResource } from './DomainResource'
import { Element } from './Element'
import { Reference } from './Reference'

export class DataRequirement_CodeFilter      extends Element
{

   static def : string = 'DataRequirement_CodeFilter';
   path : string ;
   valueSetString : string ;
   valueSetReference : Reference ;
   valueCode : string [];
   valueCoding : Coding [];
   valueCodeableConcept : CodeableConcept [];
}
