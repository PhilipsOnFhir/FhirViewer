import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { ExplanationOfBenefit_Financial } from './ExplanationOfBenefit_Financial'

export class ExplanationOfBenefit_BenefitBalance      extends BackboneElement
{

   static def : string = 'ExplanationOfBenefit_BenefitBalance';
   category : CodeableConcept ;
   subCategory : CodeableConcept ;
   excluded : boolean ;
   name : string ;
   description : string ;
   network : CodeableConcept ;
   unit : CodeableConcept ;
   term : CodeableConcept ;
   financial : ExplanationOfBenefit_Financial [];
}
