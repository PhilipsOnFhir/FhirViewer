import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { MeasureReport_Stratum } from './MeasureReport_Stratum'

export class MeasureReport_Stratifier      extends BackboneElement
{

   static def : string = 'MeasureReport_Stratifier';
   identifier : Identifier ;
   stratum : MeasureReport_Stratum [];
}
