import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { SubstancePolymer_RepeatUnit } from './SubstancePolymer_RepeatUnit'

export class SubstancePolymer_Repeat      extends BackboneElement
{

   static def : string = 'SubstancePolymer_Repeat';
   numberOfUnits : string ;
   averageMolecularFormula : string ;
   repeatUnitAmountType : CodeableConcept ;
   repeatUnit : SubstancePolymer_RepeatUnit [];
}
