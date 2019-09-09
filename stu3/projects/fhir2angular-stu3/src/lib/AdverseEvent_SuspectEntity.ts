import { AdverseEventCausalityEnum } from './AdverseEventCausalityEnum'
import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'

export class AdverseEvent_SuspectEntity      extends BackboneElement
{

   static def : string = 'AdverseEvent_SuspectEntity';
   instance : Reference ;
   causality : AdverseEventCausalityEnum ;
   causalityAssessment : CodeableConcept ;
   causalityProductRelatedness : string ;
   causalityMethod : CodeableConcept ;
   causalityAuthor : Reference ;
   causalityResult : CodeableConcept ;
}
