import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { Quantity } from './Quantity'
import { Range } from './Range'
import { Reference } from './Reference'

export class SubstanceReferenceInformation_Target      extends BackboneElement
{

   static def : string = 'SubstanceReferenceInformation_Target';
   target : Identifier ;
   type : CodeableConcept ;
   interaction : CodeableConcept ;
   organism : CodeableConcept ;
   organismType : CodeableConcept ;
   source : Reference [];
   amountQuantity : Quantity ;
   amountRange : Range ;
   amountString : string ;
   amountType : CodeableConcept ;
}
