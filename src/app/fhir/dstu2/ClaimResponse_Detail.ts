import { BackboneElement } from './BackboneElement'
import { ClaimResponse_Adjudication1 } from './ClaimResponse_Adjudication1'
import { ClaimResponse_SubDetail } from './ClaimResponse_SubDetail'
import { DomainResource } from './DomainResource'

export class ClaimResponse_Detail      extends BackboneElement
{

   static def : string = 'ClaimResponse_Detail';
   sequenceLinkId : string ;
   adjudication : ClaimResponse_Adjudication1 [];
   subDetail : ClaimResponse_SubDetail [];
}
