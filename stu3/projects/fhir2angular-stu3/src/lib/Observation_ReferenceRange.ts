import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Quantity } from './Quantity'
import { Range } from './Range'

export class Observation_ReferenceRange      extends BackboneElement
{

   static def : string = 'Observation_ReferenceRange';
   low : Quantity ;
   high : Quantity ;
   type : CodeableConcept ;
   appliesTo : CodeableConcept [];
   age : Range ;
   text : string ;
}
