import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Quantity } from './Quantity'
import { Range } from './Range'
import { SubstanceAmount_ReferenceRange } from './SubstanceAmount_ReferenceRange'

export class SubstanceAmount      extends BackboneElement
{

   static def : string = 'SubstanceAmount';
   amountQuantity : Quantity ;
   amountRange : Range ;
   amountString : string ;
   amountType : CodeableConcept ;
   amountText : string ;
   referenceRange : SubstanceAmount_ReferenceRange ;
}
