import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { SubstanceAmount } from './SubstanceAmount'

export class SubstancePolymer_DegreeOfPolymerisation      extends BackboneElement
{

   static def : string = 'SubstancePolymer_DegreeOfPolymerisation';
   degree : CodeableConcept ;
   amount : SubstanceAmount ;
}
