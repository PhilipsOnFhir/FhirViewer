import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { MeasureReport_Population } from './MeasureReport_Population'
import { MeasureReport_Stratifier } from './MeasureReport_Stratifier'
import { Quantity } from './Quantity'

export class MeasureReport_Group      extends BackboneElement
{

   static def : string = 'MeasureReport_Group';
   code : CodeableConcept ;
   population : MeasureReport_Population [];
   measureScore : Quantity ;
   stratifier : MeasureReport_Stratifier [];
}
