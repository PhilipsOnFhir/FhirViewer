import { BackboneElement } from './BackboneElement'
import { ClaimResponse_Adjudication } from './ClaimResponse_Adjudication'
import { ClaimResponse_Detail } from './ClaimResponse_Detail'
import { DomainResource } from './DomainResource'

export class ClaimResponse_Item      extends BackboneElement
{

   static def : string = 'ClaimResponse_Item';
   itemSequence : string ;
   noteNumber : string [];
   adjudication : ClaimResponse_Adjudication [];
   detail : ClaimResponse_Detail [];
}
