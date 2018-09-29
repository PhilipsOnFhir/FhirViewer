import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'

export class Measure_Stratifier      extends BackboneElement
{

   static def : string = 'Measure_Stratifier';
   code : CodeableConcept ;
   description : string ;
   criteria : string ;
   path : string ;
}
