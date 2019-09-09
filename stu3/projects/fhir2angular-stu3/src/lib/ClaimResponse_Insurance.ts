import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'

export class ClaimResponse_Insurance      extends BackboneElement
{

   static def : string = 'ClaimResponse_Insurance';
   sequence : string ;
   focal : boolean ;
   coverage : Reference ;
   businessArrangement : string ;
   preAuthRef : string [];
   claimResponse : Reference ;
}
