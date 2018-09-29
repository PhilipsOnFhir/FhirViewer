import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { SubstancePolymer_StartingMaterial } from './SubstancePolymer_StartingMaterial'

export class SubstancePolymer_MonomerSet      extends BackboneElement
{

   static def : string = 'SubstancePolymer_MonomerSet';
   ratioType : CodeableConcept ;
   startingMaterial : SubstancePolymer_StartingMaterial [];
}
