import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { SubstanceAmount } from './SubstanceAmount'
import { SubstancePolymer_DegreeOfPolymerisation } from './SubstancePolymer_DegreeOfPolymerisation'
import { SubstancePolymer_StructuralRepresentation } from './SubstancePolymer_StructuralRepresentation'

export class SubstancePolymer_RepeatUnit      extends BackboneElement
{

   static def : string = 'SubstancePolymer_RepeatUnit';
   orientationOfPolymerisation : CodeableConcept ;
   repeatUnit : string ;
   amount : SubstanceAmount ;
   degreeOfPolymerisation : SubstancePolymer_DegreeOfPolymerisation [];
   structuralRepresentation : SubstancePolymer_StructuralRepresentation [];
}
