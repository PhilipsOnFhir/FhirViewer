import { Address } from './Address'
import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'

export class ExplanationOfBenefit_Accident      extends BackboneElement
{

   static def : string = 'ExplanationOfBenefit_Accident';
   date : string ;
   type : CodeableConcept ;
   locationAddress : Address ;
   locationReference : Reference ;
}
