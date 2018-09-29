import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { Reference } from './Reference'

export class SubstanceReferenceInformation_GeneElement      extends BackboneElement
{

   static def : string = 'SubstanceReferenceInformation_GeneElement';
   type : CodeableConcept ;
   element : Identifier ;
   source : Reference [];
}
