import { BackboneElement } from './BackboneElement'
import { ClaimResponse_Adjudication3 } from './ClaimResponse_Adjudication3'
import { ClaimResponse_Detail1 } from './ClaimResponse_Detail1'
import { Coding } from './Coding'
import { DomainResource } from './DomainResource'
import { Money } from './Money'

export class ClaimResponse_AddItem      extends BackboneElement
{

   static def : string = 'ClaimResponse_AddItem';
   sequenceLinkId : string [];
   service : Coding ;
   fee : Money ;
   noteNumberLinkId : string [];
   adjudication : ClaimResponse_Adjudication3 [];
   detail : ClaimResponse_Detail1 [];
}
