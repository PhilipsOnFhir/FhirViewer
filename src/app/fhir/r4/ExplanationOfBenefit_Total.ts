import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Money } from './Money'

export class ExplanationOfBenefit_Total      extends BackboneElement
{

   static def : string = 'ExplanationOfBenefit_Total';
   category : CodeableConcept ;
   amount : Money ;
}
