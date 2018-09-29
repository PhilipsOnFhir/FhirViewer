import { BackboneElement } from './BackboneElement'
import { ClaimResponse_Adjudication2 } from './ClaimResponse_Adjudication2'
import { DomainResource } from './DomainResource'

export class ClaimResponse_SubDetail      extends BackboneElement
{

   static def : string = 'ClaimResponse_SubDetail';
   sequenceLinkId : string ;
   adjudication : ClaimResponse_Adjudication2 [];
}
