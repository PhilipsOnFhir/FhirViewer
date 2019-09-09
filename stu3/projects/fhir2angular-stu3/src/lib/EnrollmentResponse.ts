import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { FinancialResourceStatusCodesEnum } from './FinancialResourceStatusCodesEnum'
import { Identifier } from './Identifier'
import { Reference } from './Reference'

export class EnrollmentResponse      extends DomainResource
{

   static def : string = 'EnrollmentResponse';
   identifier : Identifier [];
   status : FinancialResourceStatusCodesEnum ;
   request : Reference ;
   outcome : CodeableConcept ;
   disposition : string ;
   created : string ;
   organization : Reference ;
   requestProvider : Reference ;
   requestOrganization : Reference ;
}
