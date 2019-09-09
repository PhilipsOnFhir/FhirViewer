import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { FinancialResourceStatusCodesEnum } from './FinancialResourceStatusCodesEnum'
import { Identifier } from './Identifier'
import { Reference } from './Reference'

export class PaymentNotice      extends DomainResource
{

   static def : string = 'PaymentNotice';
   identifier : Identifier [];
   status : FinancialResourceStatusCodesEnum ;
   request : Reference ;
   response : Reference ;
   statusDate : string ;
   created : string ;
   target : Reference ;
   provider : Reference ;
   organization : Reference ;
   paymentStatus : CodeableConcept ;
}
