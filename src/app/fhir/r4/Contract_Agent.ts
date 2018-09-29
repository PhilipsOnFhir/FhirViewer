import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'

export class Contract_Agent      extends BackboneElement
{

   static def : string = 'Contract_Agent';
   actor : Reference ;
   role : CodeableConcept [];
}
