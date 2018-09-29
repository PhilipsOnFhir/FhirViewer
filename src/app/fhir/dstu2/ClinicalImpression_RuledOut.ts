import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'

export class ClinicalImpression_RuledOut      extends BackboneElement
{

   static def : string = 'ClinicalImpression_RuledOut';
   item : CodeableConcept ;
   reason : string ;
}
