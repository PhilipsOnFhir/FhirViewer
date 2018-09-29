import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'

export class ExplanationOfBenefit_Adjudication      extends BackboneElement
{

   static def : string = 'ExplanationOfBenefit_Adjudication';
   category : CodeableConcept ;
   reason : CodeableConcept ;
   amount : string ;
   value : string ;
}
