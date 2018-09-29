import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { EligibilityResponse_Error } from './EligibilityResponse_Error'
import { EligibilityResponse_Insurance } from './EligibilityResponse_Insurance'
import { FinancialResourceStatusCodesEnum } from './FinancialResourceStatusCodesEnum'
import { Identifier } from './Identifier'
import { Reference } from './Reference'

export class EligibilityResponse      extends DomainResource
{

   static def : string = 'EligibilityResponse';
   identifier : Identifier [];
   status : FinancialResourceStatusCodesEnum ;
   created : string ;
   requestProvider : Reference ;
   requestOrganization : Reference ;
   request : Reference ;
   outcome : CodeableConcept ;
   disposition : string ;
   insurer : Reference ;
   inforce : string ;
   insurance : EligibilityResponse_Insurance [];
   form : CodeableConcept ;
   error : EligibilityResponse_Error [];
}
