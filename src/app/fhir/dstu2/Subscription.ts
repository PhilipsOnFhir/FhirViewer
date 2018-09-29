import { Coding } from './Coding'
import { ContactPoint } from './ContactPoint'
import { DomainResource } from './DomainResource'
import { SubscriptionStatusEnum } from './SubscriptionStatusEnum'
import { Subscription_Channel } from './Subscription_Channel'

export class Subscription      extends DomainResource
{

   static def : string = 'Subscription';
   criteria : string ;
   contact : ContactPoint [];
   reason : string ;
   status : SubscriptionStatusEnum ;
   error : string ;
   channel : Subscription_Channel ;
   end : string ;
   tag : Coding [];
}
