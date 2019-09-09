import { BackboneElement } from './BackboneElement'
import { ClaimResponse_Adjudication } from './ClaimResponse_Adjudication'
import { ClaimResponse_SubDetail } from './ClaimResponse_SubDetail'
import { DomainResource } from './DomainResource'

export class ClaimResponse_Detail      extends BackboneElement
{

   static def : string = 'ClaimResponse_Detail';
   sequenceLinkId : string ;
   noteNumber : string [];
   adjudication : ClaimResponse_Adjudication [];
   subDetail : ClaimResponse_SubDetail [];
}
