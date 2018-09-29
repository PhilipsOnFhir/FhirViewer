import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { Invoice_PriceComponent } from './Invoice_PriceComponent'
import { Reference } from './Reference'

export class Invoice_LineItem      extends BackboneElement
{

   static def : string = 'Invoice_LineItem';
   sequence : string ;
   chargeItem : Reference ;
   priceComponent : Invoice_PriceComponent [];
}
