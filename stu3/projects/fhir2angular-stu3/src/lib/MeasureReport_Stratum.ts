import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { MeasureReport_Population1 } from './MeasureReport_Population1'

export class MeasureReport_Stratum      extends BackboneElement
{

   static def : string = 'MeasureReport_Stratum';
   value : string ;
   population : MeasureReport_Population1 [];
   measureScore : string ;
}
