import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { Measure_Population } from './Measure_Population'
import { Measure_Stratifier } from './Measure_Stratifier'

export class Measure_Group      extends BackboneElement
{

   static def : string = 'Measure_Group';
   identifier : Identifier ;
   name : string ;
   description : string ;
   population : Measure_Population [];
   stratifier : Measure_Stratifier [];
}
