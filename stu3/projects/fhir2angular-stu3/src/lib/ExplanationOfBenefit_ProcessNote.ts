import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'

export class ExplanationOfBenefit_ProcessNote      extends BackboneElement
{

   static def : string = 'ExplanationOfBenefit_ProcessNote';
   number : string ;
   type : CodeableConcept ;
   text : string ;
   language : CodeableConcept ;
}
