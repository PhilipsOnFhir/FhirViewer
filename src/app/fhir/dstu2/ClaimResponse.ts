import { ClaimResponse_AddItem } from './ClaimResponse_AddItem'
import { ClaimResponse_Coverage } from './ClaimResponse_Coverage'
import { ClaimResponse_Error } from './ClaimResponse_Error'
import { ClaimResponse_Item } from './ClaimResponse_Item'
import { ClaimResponse_Note } from './ClaimResponse_Note'
import { Coding } from './Coding'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { Money } from './Money'
import { Reference } from './Reference'

export class ClaimResponse      extends DomainResource
{

   static def : string = 'ClaimResponse';
   identifier : Identifier [];
   request : Reference ;
   ruleset : Coding ;
   originalRuleset : Coding ;
   created : string ;
   organization : Reference ;
   requestProvider : Reference ;
   requestOrganization : Reference ;
   outcome : string ;
   disposition : string ;
   payeeType : Coding ;
   item : ClaimResponse_Item [];
   addItem : ClaimResponse_AddItem [];
   error : ClaimResponse_Error [];
   totalCost : Money ;
   unallocDeductable : Money ;
   totalBenefit : Money ;
   paymentAdjustment : Money ;
   paymentAdjustmentReason : Coding ;
   paymentDate : string ;
   paymentAmount : Money ;
   paymentRef : Identifier ;
   reserved : Coding ;
   form : Coding ;
   note : ClaimResponse_Note [];
   coverage : ClaimResponse_Coverage [];
}
