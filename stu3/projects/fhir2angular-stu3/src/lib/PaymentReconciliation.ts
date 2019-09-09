import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { FinancialResourceStatusCodesEnum } from './FinancialResourceStatusCodesEnum'
import { Identifier } from './Identifier'
import { PaymentReconciliation_Detail } from './PaymentReconciliation_Detail'
import { PaymentReconciliation_ProcessNote } from './PaymentReconciliation_ProcessNote'
import { Period } from './Period'
import { Reference } from './Reference'

export class PaymentReconciliation      extends DomainResource
{

   static def : string = 'PaymentReconciliation';
   identifier : Identifier [];
   status : FinancialResourceStatusCodesEnum ;
   period : Period ;
   created : string ;
   organization : Reference ;
   request : Reference ;
   outcome : CodeableConcept ;
   disposition : string ;
   requestProvider : Reference ;
   requestOrganization : Reference ;
   detail : PaymentReconciliation_Detail [];
   form : CodeableConcept ;
   total : string ;
   processNote : PaymentReconciliation_ProcessNote [];
}
