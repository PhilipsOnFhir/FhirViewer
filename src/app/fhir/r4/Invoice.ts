import { Annotation } from './Annotation'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { InvoiceStatusEnum } from './InvoiceStatusEnum'
import { Invoice_LineItem } from './Invoice_LineItem'
import { Invoice_Participant } from './Invoice_Participant'
import { Invoice_PriceComponent } from './Invoice_PriceComponent'
import { Money } from './Money'
import { Reference } from './Reference'

export class Invoice      extends DomainResource
{

   static def : string = 'Invoice';
   identifier : Identifier [];
   status : InvoiceStatusEnum ;
   cancelledReason : string ;
   type : CodeableConcept ;
   subject : Reference ;
   recipient : Reference ;
   date : string ;
   participant : Invoice_Participant [];
   issuer : Reference ;
   account : Reference ;
   lineItem : Invoice_LineItem [];
   totalPriceComponent : Invoice_PriceComponent [];
   totalNet : Money ;
   totalGross : Money ;
   paymentTerms : string ;
   note : Annotation [];
}
