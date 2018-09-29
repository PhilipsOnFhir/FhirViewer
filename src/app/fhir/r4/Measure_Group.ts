import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Measure_Population } from './Measure_Population'
import { Measure_Stratifier } from './Measure_Stratifier'

export class Measure_Group      extends BackboneElement
{

   static def : string = 'Measure_Group';
   code : CodeableConcept ;
   description : string ;
   population : Measure_Population [];
   stratifier : Measure_Stratifier [];
}
