import { BackboneElement } from './BackboneElement'
import { ClaimResponse_Adjudication } from './ClaimResponse_Adjudication'
import { DomainResource } from './DomainResource'

export class ClaimResponse_SubDetail      extends BackboneElement
{

   static def : string = 'ClaimResponse_SubDetail';
   sequenceLinkId : string ;
   noteNumber : string [];
   adjudication : ClaimResponse_Adjudication [];
}
