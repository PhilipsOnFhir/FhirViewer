import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { Coding } from './Coding'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'

export class ExplanationOfBenefit_Payee      extends BackboneElement
{

   static def : string = 'ExplanationOfBenefit_Payee';
   type : CodeableConcept ;
   resource : Coding ;
   party : Reference ;
}
