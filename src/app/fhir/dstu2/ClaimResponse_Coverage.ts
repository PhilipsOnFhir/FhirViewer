import { BackboneElement } from './BackboneElement'
import { Coding } from './Coding'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'

export class ClaimResponse_Coverage      extends BackboneElement
{

   static def : string = 'ClaimResponse_Coverage';
   sequence : string ;
   focal : string ;
   coverage : Reference ;
   businessArrangement : string ;
   relationship : Coding ;
   preAuthRef : string [];
   claimResponse : Reference ;
   originalRuleset : Coding ;
}
