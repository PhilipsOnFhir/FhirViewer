import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'

export class ImmunizationRecommendation_DateCriterion      extends BackboneElement
{

   static def : string = 'ImmunizationRecommendation_DateCriterion';
   code : CodeableConcept ;
   value : string ;
}
