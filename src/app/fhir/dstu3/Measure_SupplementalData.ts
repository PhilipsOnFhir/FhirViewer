import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'

export class Measure_SupplementalData      extends BackboneElement
{

   static def : string = 'Measure_SupplementalData';
   identifier : Identifier ;
   usage : CodeableConcept [];
   criteria : string ;
   path : string ;
}
