import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { EligibilityRequest_Authorization } from './EligibilityRequest_Authorization'
import { FinancialResourceStatusCodesEnum } from './FinancialResourceStatusCodesEnum'
import { Identifier } from './Identifier'
import { Period } from './Period'
import { Reference } from './Reference'

export class EligibilityRequest      extends DomainResource
{

   static def : string = 'EligibilityRequest';
   identifier : Identifier [];
   status : FinancialResourceStatusCodesEnum ;
   priority : CodeableConcept ;
   patient : Reference ;
   servicedDate : string ;
   servicedPeriod : Period ;
   created : string ;
   enterer : Reference ;
   provider : Reference ;
   insurer : Reference ;
   facility : Reference ;
   coverage : Reference ;
   businessArrangement : string ;
   benefitCategory : CodeableConcept ;
   benefitSubCategory : CodeableConcept ;
   authorization : EligibilityRequest_Authorization [];
}
