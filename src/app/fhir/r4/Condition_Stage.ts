import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'

export class Condition_Stage      extends BackboneElement
{

   static def : string = 'Condition_Stage';
   summary : CodeableConcept ;
   assessment : Reference [];
   type : CodeableConcept ;
}
