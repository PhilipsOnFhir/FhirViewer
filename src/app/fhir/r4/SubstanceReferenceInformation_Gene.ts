import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'

export class SubstanceReferenceInformation_Gene      extends BackboneElement
{

   static def : string = 'SubstanceReferenceInformation_Gene';
   geneSequenceOrigin : CodeableConcept ;
   gene : CodeableConcept ;
   source : Reference [];
}
