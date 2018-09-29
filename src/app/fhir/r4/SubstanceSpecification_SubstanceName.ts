import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { SubstanceSpecification_OfficialName } from './SubstanceSpecification_OfficialName'

export class SubstanceSpecification_SubstanceName      extends BackboneElement
{

   static def : string = 'SubstanceSpecification_SubstanceName';
   name : string ;
   type : CodeableConcept ;
   language : CodeableConcept [];
   domain : CodeableConcept [];
   jurisdiction : CodeableConcept [];
   officialName : SubstanceSpecification_OfficialName [];
   referenceSource : string [];
}
