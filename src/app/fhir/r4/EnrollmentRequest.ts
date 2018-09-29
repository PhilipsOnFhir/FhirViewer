import { DomainResource } from './DomainResource'
import { FinancialResourceStatusCodesEnum } from './FinancialResourceStatusCodesEnum'
import { Identifier } from './Identifier'
import { Reference } from './Reference'

export class EnrollmentRequest      extends DomainResource
{

   static def : string = 'EnrollmentRequest';
   identifier : Identifier [];
   status : FinancialResourceStatusCodesEnum ;
   created : string ;
   insurer : Reference ;
   provider : Reference ;
   candidate : Reference ;
   coverage : Reference ;
}
