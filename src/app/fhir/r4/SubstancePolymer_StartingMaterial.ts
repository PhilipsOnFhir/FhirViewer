import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { SubstanceAmount } from './SubstanceAmount'

export class SubstancePolymer_StartingMaterial      extends BackboneElement
{

   static def : string = 'SubstancePolymer_StartingMaterial';
   material : CodeableConcept ;
   type : CodeableConcept ;
   isDefining : string ;
   amount : SubstanceAmount ;
}
