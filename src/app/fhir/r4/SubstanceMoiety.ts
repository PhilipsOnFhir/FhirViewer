import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { SubstanceAmount } from './SubstanceAmount'

export class SubstanceMoiety      extends BackboneElement
{

   static def : string = 'SubstanceMoiety';
   role : CodeableConcept ;
   identifier : Identifier ;
   name : string ;
   stereochemistry : CodeableConcept ;
   opticalActivity : CodeableConcept ;
   molecularFormula : string ;
   amount : SubstanceAmount ;
}
