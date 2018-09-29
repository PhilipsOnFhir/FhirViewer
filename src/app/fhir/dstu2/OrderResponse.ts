import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { OrderStatusEnum } from './OrderStatusEnum'
import { Reference } from './Reference'

export class OrderResponse      extends DomainResource
{

   static def : string = 'OrderResponse';
   identifier : Identifier [];
   request : Reference ;
   date : string ;
   who : Reference ;
   orderStatus : OrderStatusEnum ;
   description : string ;
   fulfillment : Reference [];
}
