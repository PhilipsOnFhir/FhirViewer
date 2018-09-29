import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { FinancialResourceStatusCodesEnum } from './FinancialResourceStatusCodesEnum'
import { Identifier } from './Identifier'
import { ProcessOutcomeCodesEnum } from './ProcessOutcomeCodesEnum'
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
   outcome : ProcessOutcomeCodesEnum ;
   disposition : string ;
   requestProvider : Reference ;
   form : CodeableConcept ;
   processNote : ProcessResponse_ProcessNote [];
   error : CodeableConcept [];
   communicationRequest : Reference [];
}
