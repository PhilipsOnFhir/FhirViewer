import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Range } from './Range'
import { SimpleQuantity } from './SimpleQuantity'

export class Observation_ReferenceRange      extends BackboneElement
{

   static def : string = 'Observation_ReferenceRange';
   low : SimpleQuantity ;
   high : SimpleQuantity ;
   meaning : CodeableConcept ;
   age : Range ;
   text : string ;
}
