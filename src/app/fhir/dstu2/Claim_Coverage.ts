import { BackboneElement } from './BackboneElement'
import { Coding } from './Coding'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'

export class Claim_Coverage      extends BackboneElement
{

   static def : string = 'Claim_Coverage';
   sequence : string ;
   focal : string ;
   coverage : Reference ;
   businessArrangement : string ;
   relationship : Coding ;
   preAuthRef : string [];
   claimResponse : Reference ;
   originalRuleset : Coding ;
}
