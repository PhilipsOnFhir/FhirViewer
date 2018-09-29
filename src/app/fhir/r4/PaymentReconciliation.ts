import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { FinancialResourceStatusCodesEnum } from './FinancialResourceStatusCodesEnum'
import { Identifier } from './Identifier'
import { Money } from './Money'
import { PaymentReconciliation_Detail } from './PaymentReconciliation_Detail'
import { PaymentReconciliation_ProcessNote } from './PaymentReconciliation_ProcessNote'
import { Period } from './Period'
import { Reference } from './Reference'
import { RemittanceOutcomeEnum } from './RemittanceOutcomeEnum'

export class PaymentReconciliation      extends DomainResource
{

   static def : string = 'PaymentReconciliation';
   identifier : Identifier [];
   status : FinancialResourceStatusCodesEnum ;
   period : Period ;
   created : string ;
   organization : Reference ;
   request : Reference ;
   outcome : RemittanceOutcomeEnum ;
   disposition : string ;
   requestProvider : Reference ;
   detail : PaymentReconciliation_Detail [];
   form : CodeableConcept ;
   total : Money ;
   processNote : PaymentReconciliation_ProcessNote [];
}
