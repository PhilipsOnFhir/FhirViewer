import { Coding } from './Coding'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { Reference } from './Reference'

export class PaymentNotice      extends DomainResource
{

   static def : string = 'PaymentNotice';
   identifier : Identifier [];
   ruleset : Coding ;
   originalRuleset : Coding ;
   created : string ;
   target : Reference ;
   provider : Reference ;
   organization : Reference ;
   request : Reference ;
   response : Reference ;
   paymentStatus : Coding ;
}
