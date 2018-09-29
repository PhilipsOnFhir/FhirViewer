import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'

export class CarePlan_Participant      extends BackboneElement
{

   static def : string = 'CarePlan_Participant';
   role : CodeableConcept ;
   member : Reference ;
}
