import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'

export class ClinicalImpression_Investigation      extends BackboneElement
{

   static def : string = 'ClinicalImpression_Investigation';
   code : CodeableConcept ;
   item : Reference [];
}
