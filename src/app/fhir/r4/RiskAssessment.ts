import { Annotation } from './Annotation'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { ObservationStatusEnum } from './ObservationStatusEnum'
import { Period } from './Period'
import { Reference } from './Reference'
import { RiskAssessment_Prediction } from './RiskAssessment_Prediction'

export class RiskAssessment      extends DomainResource
{

   static def : string = 'RiskAssessment';
   identifier : Identifier [];
   basedOn : Reference ;
   parent : Reference ;
   status : ObservationStatusEnum ;
   method : CodeableConcept ;
   code : CodeableConcept ;
   subject : Reference ;
   context : Reference ;
   occurrenceDateTime : string ;
   occurrencePeriod : Period ;
   condition : Reference ;
   performer : Reference ;
   reasonCode : CodeableConcept [];
   reasonReference : Reference [];
   basis : Reference [];
   prediction : RiskAssessment_Prediction [];
   mitigation : string ;
   note : Annotation [];
}
