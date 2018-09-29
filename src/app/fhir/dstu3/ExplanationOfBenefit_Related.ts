import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { Reference } from './Reference'

export class ExplanationOfBenefit_Related      extends BackboneElement
{

   static def : string = 'ExplanationOfBenefit_Related';
   claim : Reference ;
   relationship : CodeableConcept ;
   reference : Identifier ;
}
