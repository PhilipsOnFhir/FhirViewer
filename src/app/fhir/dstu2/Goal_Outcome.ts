import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'

export class Goal_Outcome      extends BackboneElement
{

   static def : string = 'Goal_Outcome';
   resultCodeableConcept : CodeableConcept ;
   resultReference : Reference ;
}
