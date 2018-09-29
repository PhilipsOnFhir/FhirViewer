import { DomainResource } from './DomainResource'
import { FinancialResourceStatusCodesEnum } from './FinancialResourceStatusCodesEnum'
import { Identifier } from './Identifier'
import { Reference } from './Reference'
import { RemittanceOutcomeEnum } from './RemittanceOutcomeEnum'

export class EnrollmentResponse      extends DomainResource
{

   static def : string = 'EnrollmentResponse';
   identifier : Identifier [];
   status : FinancialResourceStatusCodesEnum ;
   request : Reference ;
   outcome : RemittanceOutcomeEnum ;
   disposition : string ;
   created : string ;
   organization : Reference ;
   requestProvider : Reference ;
}
