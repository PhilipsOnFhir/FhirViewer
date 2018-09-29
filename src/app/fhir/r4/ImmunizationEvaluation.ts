import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { ImmunizationEvaluationStatusCodesEnum } from './ImmunizationEvaluationStatusCodesEnum'
import { Reference } from './Reference'

export class ImmunizationEvaluation      extends DomainResource
{

   static def : string = 'ImmunizationEvaluation';
   identifier : Identifier [];
   status : ImmunizationEvaluationStatusCodesEnum ;
   patient : Reference ;
   date : string ;
   authority : Reference ;
   targetDisease : CodeableConcept ;
   immunizationEvent : Reference ;
   doseStatus : CodeableConcept ;
   doseStatusReason : CodeableConcept [];
   description : string ;
   series : string ;
   doseNumberPositiveInt : string ;
   doseNumberString : string ;
   seriesDosesPositiveInt : string ;
   seriesDosesString : string ;
}
