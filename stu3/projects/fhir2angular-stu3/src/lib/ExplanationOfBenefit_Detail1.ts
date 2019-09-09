import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { ExplanationOfBenefit_Adjudication } from './ExplanationOfBenefit_Adjudication'

export class ExplanationOfBenefit_Detail1      extends BackboneElement
{

   static def : string = 'ExplanationOfBenefit_Detail1';
   revenue : CodeableConcept ;
   category : CodeableConcept ;
   service : CodeableConcept ;
   modifier : CodeableConcept [];
   fee : string ;
   noteNumber : string [];
   adjudication : ExplanationOfBenefit_Adjudication [];
}
