import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'

export class Contract_Agent1      extends BackboneElement
{

   static def : string = 'Contract_Agent1';
   actor : Reference ;
   role : CodeableConcept [];
}
