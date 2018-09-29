import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { ExplanationOfBenefit_Adjudication } from './ExplanationOfBenefit_Adjudication'
import { Money } from './Money'

export class ExplanationOfBenefit_AddItem      extends BackboneElement
{

   static def : string = 'ExplanationOfBenefit_AddItem';
   itemSequence : string [];
   detailSequence : string [];
   subDetailSequence : string [];
   service : CodeableConcept ;
   modifier : CodeableConcept [];
   fee : Money ;
   noteNumber : string [];
   adjudication : ExplanationOfBenefit_Adjudication [];
}
