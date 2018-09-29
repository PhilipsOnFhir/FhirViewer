import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { MeasureReport_Population } from './MeasureReport_Population'
import { MeasureReport_Stratifier } from './MeasureReport_Stratifier'

export class MeasureReport_Group      extends BackboneElement
{

   static def : string = 'MeasureReport_Group';
   identifier : Identifier ;
   population : MeasureReport_Population [];
   measureScore : string ;
   stratifier : MeasureReport_Stratifier [];
}
