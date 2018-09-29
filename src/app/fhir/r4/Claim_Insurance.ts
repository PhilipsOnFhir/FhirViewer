import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { Reference } from './Reference'

export class Claim_Insurance      extends BackboneElement
{

   static def : string = 'Claim_Insurance';
   sequence : string ;
   focal : string ;
   identifier : Identifier ;
   coverage : Reference ;
   businessArrangement : string ;
   preAuthRef : string [];
   claimResponse : Reference ;
}
