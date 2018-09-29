import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'

export class ClinicalImpression_Investigations      extends BackboneElement
{

   static def : string = 'ClinicalImpression_Investigations';
   code : CodeableConcept ;
   item : Reference [];
}
