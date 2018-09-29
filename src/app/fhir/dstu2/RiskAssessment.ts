import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { Reference } from './Reference'
import { RiskAssessment_Prediction } from './RiskAssessment_Prediction'

export class RiskAssessment      extends DomainResource
{

   static def : string = 'RiskAssessment';
   subject : Reference ;
   date : string ;
   condition : Reference ;
   encounter : Reference ;
   performer : Reference ;
   identifier : Identifier ;
   method : CodeableConcept ;
   basis : Reference [];
   prediction : RiskAssessment_Prediction [];
   mitigation : string ;
}
