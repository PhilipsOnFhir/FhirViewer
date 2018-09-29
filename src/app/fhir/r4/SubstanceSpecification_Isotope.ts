import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { Quantity } from './Quantity'
import { SubstanceSpecification_MolecularWeight } from './SubstanceSpecification_MolecularWeight'

export class SubstanceSpecification_Isotope      extends BackboneElement
{

   static def : string = 'SubstanceSpecification_Isotope';
   nuclideId : Identifier ;
   nuclideName : CodeableConcept ;
   substitutionType : CodeableConcept ;
   nuclideHalfLife : Quantity ;
   amount : string ;
   molecularWeight : SubstanceSpecification_MolecularWeight ;
}
