import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Period } from './Period'
import { Range } from './Range'

export class RiskAssessment_Prediction      extends BackboneElement
{

   static def : string = 'RiskAssessment_Prediction';
   outcome : CodeableConcept ;
   probabilityDecimal : string ;
   probabilityRange : Range ;
   qualitativeRisk : CodeableConcept ;
   relativeRisk : string ;
   whenPeriod : Period ;
   whenRange : Range ;
   rationale : string ;
}
