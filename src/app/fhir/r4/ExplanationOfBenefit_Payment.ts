import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { Money } from './Money'

export class ExplanationOfBenefit_Payment      extends BackboneElement
{

   static def : string = 'ExplanationOfBenefit_Payment';
   type : CodeableConcept ;
   adjustment : Money ;
   adjustmentReason : CodeableConcept ;
   date : string ;
   amount : Money ;
   identifier : Identifier ;
}
