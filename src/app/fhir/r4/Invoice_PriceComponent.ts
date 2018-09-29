import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { InvoicePriceComponentTypeEnum } from './InvoicePriceComponentTypeEnum'
import { Money } from './Money'

export class Invoice_PriceComponent      extends BackboneElement
{

   static def : string = 'Invoice_PriceComponent';
   type : InvoicePriceComponentTypeEnum ;
   code : CodeableConcept ;
   factor : string ;
   amount : Money ;
}
