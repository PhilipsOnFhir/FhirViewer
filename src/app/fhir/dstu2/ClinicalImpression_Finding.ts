import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'

export class ClinicalImpression_Finding      extends BackboneElement
{

   static def : string = 'ClinicalImpression_Finding';
   item : CodeableConcept ;
   cause : string ;
}
