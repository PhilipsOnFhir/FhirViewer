import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'

export class Measure_Stratifier      extends BackboneElement
{

   static def : string = 'Measure_Stratifier';
   identifier : Identifier ;
   criteria : string ;
   path : string ;
}
