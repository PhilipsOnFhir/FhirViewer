import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'

export class ExplanationOfBenefit_Procedure      extends BackboneElement
{

   static def : string = 'ExplanationOfBenefit_Procedure';
   sequence : string ;
   date : string ;
   procedureCodeableConcept : CodeableConcept ;
   procedureReference : Reference ;
}
