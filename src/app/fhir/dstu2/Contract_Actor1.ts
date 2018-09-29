import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'

export class Contract_Actor1      extends BackboneElement
{

   static def : string = 'Contract_Actor1';
   entity : Reference ;
   role : CodeableConcept [];
}
