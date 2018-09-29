import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { EligibilityResponse_Authorization } from './EligibilityResponse_Authorization'
import { EligibilityResponse_Error } from './EligibilityResponse_Error'
import { EligibilityResponse_Insurance } from './EligibilityResponse_Insurance'
import { FinancialResourceStatusCodesEnum } from './FinancialResourceStatusCodesEnum'
import { Identifier } from './Identifier'
import { Reference } from './Reference'
import { RemittanceOutcomeEnum } from './RemittanceOutcomeEnum'

export class EligibilityResponse      extends DomainResource
{

   static def : string = 'EligibilityResponse';
   identifier : Identifier [];
   status : FinancialResourceStatusCodesEnum ;
   created : string ;
   requestProvider : Reference ;
   request : Reference ;
   outcome : RemittanceOutcomeEnum ;
   disposition : string ;
   insurer : Reference ;
   inforce : string ;
   insurance : EligibilityResponse_Insurance [];
   preAuthRef : string ;
   authorization : EligibilityResponse_Authorization [];
   form : CodeableConcept ;
   error : EligibilityResponse_Error [];
}
