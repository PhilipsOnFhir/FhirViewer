import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'

export class AdverseEvent_Causality      extends BackboneElement
{

   static def : string = 'AdverseEvent_Causality';
   assessment : CodeableConcept ;
   productRelatedness : string ;
   author : Reference ;
   method : CodeableConcept ;
}
