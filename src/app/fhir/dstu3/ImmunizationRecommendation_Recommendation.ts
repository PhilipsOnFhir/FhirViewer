import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { ImmunizationRecommendation_DateCriterion } from './ImmunizationRecommendation_DateCriterion'
import { ImmunizationRecommendation_Protocol } from './ImmunizationRecommendation_Protocol'
import { Reference } from './Reference'

export class ImmunizationRecommendation_Recommendation      extends BackboneElement
{

   static def : string = 'ImmunizationRecommendation_Recommendation';
   date : string ;
   vaccineCode : CodeableConcept ;
   targetDisease : CodeableConcept ;
   doseNumber : string ;
   forecastStatus : CodeableConcept ;
   dateCriterion : ImmunizationRecommendation_DateCriterion [];
   protocol : ImmunizationRecommendation_Protocol ;
   supportingImmunization : Reference [];
   supportingPatientInformation : Reference [];
}
