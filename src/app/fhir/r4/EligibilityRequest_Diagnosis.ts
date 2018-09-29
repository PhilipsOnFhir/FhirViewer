import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'

export class EligibilityRequest_Diagnosis      extends BackboneElement
{

   static def : string = 'EligibilityRequest_Diagnosis';
   diagnosisCodeableConcept : CodeableConcept ;
   diagnosisReference : Reference ;
}
