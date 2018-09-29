import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'

export class SubstanceSpecification_OfficialName      extends BackboneElement
{

   static def : string = 'SubstanceSpecification_OfficialName';
   authority : CodeableConcept ;
   status : CodeableConcept ;
   date : string ;
}
