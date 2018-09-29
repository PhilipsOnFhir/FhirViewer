import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { MeasureReport_Stratum } from './MeasureReport_Stratum'

export class MeasureReport_Stratifier      extends BackboneElement
{

   static def : string = 'MeasureReport_Stratifier';
   code : CodeableConcept ;
   stratum : MeasureReport_Stratum [];
}
