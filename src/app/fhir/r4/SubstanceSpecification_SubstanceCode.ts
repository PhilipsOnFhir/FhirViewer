import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'

export class SubstanceSpecification_SubstanceCode      extends BackboneElement
{

   static def : string = 'SubstanceSpecification_SubstanceCode';
   code : CodeableConcept ;
   status : CodeableConcept ;
   statusDate : string ;
   comment : string ;
   referenceSource : string [];
}
