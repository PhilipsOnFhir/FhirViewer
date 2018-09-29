import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'
import { SubstanceSpecification_Isotope } from './SubstanceSpecification_Isotope'
import { SubstanceSpecification_MolecularWeight } from './SubstanceSpecification_MolecularWeight'
import { SubstanceSpecification_StructuralRepresentation } from './SubstanceSpecification_StructuralRepresentation'

export class SubstanceSpecification_Structure      extends BackboneElement
{

   static def : string = 'SubstanceSpecification_Structure';
   stereochemistry : CodeableConcept ;
   opticalActivity : CodeableConcept ;
   molecularFormula : string ;
   molecularFormulaByMoiety : string ;
   isotope : SubstanceSpecification_Isotope [];
   molecularWeight : SubstanceSpecification_MolecularWeight ;
   referenceSource : Reference [];
   structuralRepresentation : SubstanceSpecification_StructuralRepresentation [];
}
