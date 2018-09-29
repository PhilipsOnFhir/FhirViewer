import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'

export class SubstanceSpecification_Property      extends BackboneElement
{

   static def : string = 'SubstanceSpecification_Property';
   type : CodeableConcept ;
   name : CodeableConcept ;
   parameters : string ;
   substanceId : Identifier ;
   substanceName : string ;
   amount : string ;
}
