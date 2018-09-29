import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'

export class ClinicalImpression_Finding      extends BackboneElement
{

   static def : string = 'ClinicalImpression_Finding';
   itemCodeableConcept : CodeableConcept ;
   itemReference : Reference ;
   basis : string ;
}
