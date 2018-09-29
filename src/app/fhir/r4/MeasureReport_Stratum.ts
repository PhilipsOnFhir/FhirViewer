import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { MeasureReport_Population1 } from './MeasureReport_Population1'
import { Quantity } from './Quantity'

export class MeasureReport_Stratum      extends BackboneElement
{

   static def : string = 'MeasureReport_Stratum';
   value : CodeableConcept ;
   population : MeasureReport_Population1 [];
   measureScore : Quantity ;
}
