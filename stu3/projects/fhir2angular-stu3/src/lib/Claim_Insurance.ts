import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'

export class Claim_Insurance      extends BackboneElement
{

   static def : string = 'Claim_Insurance';
   sequence : string ;
   focal : boolean ;
   coverage : Reference ;
   businessArrangement : string ;
   preAuthRef : string [];
   claimResponse : Reference ;
}
