import { ClaimProcessingCodesEnum } from './ClaimProcessingCodesEnum'
import { ClaimResponse_AddItem } from './ClaimResponse_AddItem'
import { ClaimResponse_Error } from './ClaimResponse_Error'
import { ClaimResponse_Insurance } from './ClaimResponse_Insurance'
import { ClaimResponse_Item } from './ClaimResponse_Item'
import { ClaimResponse_Payment } from './ClaimResponse_Payment'
import { ClaimResponse_ProcessNote } from './ClaimResponse_ProcessNote'
import { ClaimResponse_Total } from './ClaimResponse_Total'
import { CodeableConcept } from './CodeableConcept'
import { Coding } from './Coding'
import { DomainResource } from './DomainResource'
import { FinancialResourceStatusCodesEnum } from './FinancialResourceStatusCodesEnum'
import { Identifier } from './Identifier'
import { Reference } from './Reference'
import { UseEnum } from './UseEnum'

export class ClaimResponse      extends DomainResource
{

   static def : string = 'ClaimResponse';
   identifier : Identifier [];
   status : FinancialResourceStatusCodesEnum ;
   type : CodeableConcept ;
   subType : CodeableConcept [];
   use : UseEnum ;
   patient : Reference ;
   created : string ;
   insurer : Reference ;
   requestProvider : Reference ;
   request : Reference ;
   outcome : ClaimProcessingCodesEnum ;
   disposition : string ;
   payeeType : CodeableConcept ;
   item : ClaimResponse_Item [];
   addItem : ClaimResponse_AddItem [];
   error : ClaimResponse_Error [];
   total : ClaimResponse_Total [];
   payment : ClaimResponse_Payment ;
   reserved : Coding ;
   form : CodeableConcept ;
   processNote : ClaimResponse_ProcessNote [];
   communicationRequest : Reference [];
   insurance : ClaimResponse_Insurance [];
}
