import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Range } from './Range'

export class ObservationDefinition_QualifiedInterval      extends BackboneElement
{

   static def : string = 'ObservationDefinition_QualifiedInterval';
   category : CodeableConcept ;
   range : Range ;
   type : CodeableConcept ;
   appliesTo : CodeableConcept [];
   age : Range ;
   gestationalAge : Range ;
   condition : string ;
}
