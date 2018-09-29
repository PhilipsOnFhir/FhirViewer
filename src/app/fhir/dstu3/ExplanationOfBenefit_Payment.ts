import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'

export class ExplanationOfBenefit_Payment      extends BackboneElement
{

   static def : string = 'ExplanationOfBenefit_Payment';
   type : CodeableConcept ;
   adjustment : string ;
   adjustmentReason : CodeableConcept ;
   date : string ;
   amount : string ;
   identifier : Identifier ;
}
