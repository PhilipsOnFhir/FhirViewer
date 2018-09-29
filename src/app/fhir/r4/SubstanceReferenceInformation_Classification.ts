import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'

export class SubstanceReferenceInformation_Classification      extends BackboneElement
{

   static def : string = 'SubstanceReferenceInformation_Classification';
   domain : CodeableConcept ;
   classification : CodeableConcept ;
   subtype : CodeableConcept [];
   source : Reference [];
}
