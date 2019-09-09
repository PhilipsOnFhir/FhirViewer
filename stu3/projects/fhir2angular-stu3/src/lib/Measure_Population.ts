import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'

export class Measure_Population      extends BackboneElement
{

   static def : string = 'Measure_Population';
   identifier : Identifier ;
   code : CodeableConcept ;
   name : string ;
   description : string ;
   criteria : string ;
}
