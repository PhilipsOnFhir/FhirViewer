import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { ExplanationOfBenefit_Adjudication } from './ExplanationOfBenefit_Adjudication'
import { ExplanationOfBenefit_Detail1 } from './ExplanationOfBenefit_Detail1'

export class ExplanationOfBenefit_AddItem      extends BackboneElement
{

   static def : string = 'ExplanationOfBenefit_AddItem';
   sequenceLinkId : string [];
   revenue : CodeableConcept ;
   category : CodeableConcept ;
   service : CodeableConcept ;
   modifier : CodeableConcept [];
   fee : string ;
   noteNumber : string [];
   adjudication : ExplanationOfBenefit_Adjudication [];
   detail : ExplanationOfBenefit_Detail1 [];
}
