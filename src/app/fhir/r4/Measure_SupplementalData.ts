import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'

export class Measure_SupplementalData      extends BackboneElement
{

   static def : string = 'Measure_SupplementalData';
   code : CodeableConcept ;
   usage : CodeableConcept [];
   description : string ;
   criteria : string ;
   path : string ;
}
