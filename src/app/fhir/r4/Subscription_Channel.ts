import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { SubscriptionChannelTypeEnum } from './SubscriptionChannelTypeEnum'

export class Subscription_Channel      extends BackboneElement
{

   static def : string = 'Subscription_Channel';
   type : SubscriptionChannelTypeEnum ;
   endpoint : string ;
   payload : string ;
   header : string [];
}
