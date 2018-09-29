import { Coding } from './Coding'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { Money } from './Money'
import { PaymentReconciliation_Detail } from './PaymentReconciliation_Detail'
import { PaymentReconciliation_Note } from './PaymentReconciliation_Note'
import { Period } from './Period'
import { Reference } from './Reference'

export class PaymentReconciliation      extends DomainResource
{

   static def : string = 'PaymentReconciliation';
   identifier : Identifier [];
   request : Reference ;
   outcome : string ;
   disposition : string ;
   ruleset : Coding ;
   originalRuleset : Coding ;
   created : string ;
   period : Period ;
   organization : Reference ;
   requestProvider : Reference ;
   requestOrganization : Reference ;
   detail : PaymentReconciliation_Detail [];
   form : Coding ;
   total : Money ;
   note : PaymentReconciliation_Note [];
}
