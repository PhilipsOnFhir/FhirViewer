import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { FinancialResourceStatusCodesEnum } from './FinancialResourceStatusCodesEnum'
import { Identifier } from './Identifier'
import { ProcessResponse_ProcessNote } from './ProcessResponse_ProcessNote'
import { Reference } from './Reference'

export class ProcessResponse      extends DomainResource
{

   static def : string = 'ProcessResponse';
   identifier : Identifier [];
   status : FinancialResourceStatusCodesEnum ;
   created : string ;
   organization : Reference ;
   request : Reference ;
   outcome : CodeableConcept ;
   disposition : string ;
   requestProvider : Reference ;
   requestOrganization : Reference ;
   form : CodeableConcept ;
   processNote : ProcessResponse_ProcessNote [];
   error : CodeableConcept [];
   communicationRequest : Reference [];
}
