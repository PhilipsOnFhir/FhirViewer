import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'

export class ExplanationOfBenefit_Diagnosis      extends BackboneElement
{

   static def : string = 'ExplanationOfBenefit_Diagnosis';
   sequence : string ;
   diagnosisCodeableConcept : CodeableConcept ;
   diagnosisReference : Reference ;
   type : CodeableConcept [];
   packageCode : CodeableConcept ;
}
