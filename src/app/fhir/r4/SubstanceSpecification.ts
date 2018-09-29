import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { Reference } from './Reference'
import { SubstanceSpecification_Moiety } from './SubstanceSpecification_Moiety'
import { SubstanceSpecification_MolecularWeight } from './SubstanceSpecification_MolecularWeight'
import { SubstanceSpecification_Property } from './SubstanceSpecification_Property'
import { SubstanceSpecification_Structure } from './SubstanceSpecification_Structure'
import { SubstanceSpecification_SubstanceCode } from './SubstanceSpecification_SubstanceCode'
import { SubstanceSpecification_SubstanceName } from './SubstanceSpecification_SubstanceName'

export class SubstanceSpecification      extends DomainResource
{

   static def : string = 'SubstanceSpecification';
   comment : string ;
   stoichiometric : string ;
   identifier : Identifier ;
   type : CodeableConcept ;
   referenceSource : string [];
   moiety : SubstanceSpecification_Moiety [];
   property : SubstanceSpecification_Property [];
   referenceInformation : Reference ;
   structure : SubstanceSpecification_Structure ;
   substanceCode : SubstanceSpecification_SubstanceCode [];
   substanceName : SubstanceSpecification_SubstanceName [];
   molecularWeight : SubstanceSpecification_MolecularWeight [];
   polymer : Reference ;
}
