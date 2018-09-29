import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'

export class Contract_Actor      extends BackboneElement
{

   static def : string = 'Contract_Actor';
   entity : Reference ;
   role : CodeableConcept [];
}
