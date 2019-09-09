import { Coding } from './Coding'
import { ContactPoint } from './ContactPoint'
import { DomainResource } from './DomainResource'
import { SubscriptionStatusEnum } from './SubscriptionStatusEnum'
import { Subscription_Channel } from './Subscription_Channel'

export class Subscription      extends DomainResource
{

   static def : string = 'Subscription';
   status : SubscriptionStatusEnum ;
   contact : ContactPoint [];
   end : string ;
   reason : string ;
   criteria : string ;
   error : string ;
   channel : Subscription_Channel ;
   tag : Coding [];
}
