import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Quantity } from './Quantity'
import { Range } from './Range'
import { Reference } from './Reference'

export class SubstanceReferenceInformation_Relationship      extends BackboneElement
{

   static def : string = 'SubstanceReferenceInformation_Relationship';
   substanceReference : Reference ;
   substanceCodeableConcept : CodeableConcept ;
   relationship : CodeableConcept ;
   interaction : CodeableConcept ;
   isDefining : string ;
   amountQuantity : Quantity ;
   amountRange : Range ;
   amountString : string ;
   amountType : CodeableConcept ;
   amountText : string ;
   source : Reference [];
}
