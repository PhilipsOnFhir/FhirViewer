import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { ImmunizationRecommendation_DateCriterion } from './ImmunizationRecommendation_DateCriterion'
import { Reference } from './Reference'

export class ImmunizationRecommendation_Recommendation      extends BackboneElement
{

   static def : string = 'ImmunizationRecommendation_Recommendation';
   vaccineCode : CodeableConcept [];
   targetDisease : CodeableConcept ;
   contraindicatedVaccineCode : CodeableConcept [];
   forecastStatus : CodeableConcept ;
   forecastReason : CodeableConcept [];
   dateCriterion : ImmunizationRecommendation_DateCriterion [];
   description : string ;
   series : string ;
   doseNumberPositiveInt : string ;
   doseNumberString : string ;
   seriesDosesPositiveInt : string ;
   seriesDosesString : string ;
   supportingImmunization : Reference [];
   supportingPatientInformation : Reference [];
}
