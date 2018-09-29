import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'

export class Condition_Evidence      extends BackboneElement
{

   static def : string = 'Condition_Evidence';
   code : CodeableConcept ;
   detail : Reference [];
}
