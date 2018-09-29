import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'

export class Measure_Population      extends BackboneElement
{

   static def : string = 'Measure_Population';
   code : CodeableConcept ;
   description : string ;
   criteria : string ;
}
