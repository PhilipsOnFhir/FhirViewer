import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'

export class ReferralRequest_Requester      extends BackboneElement
{

   static def : string = 'ReferralRequest_Requester';
   agent : Reference ;
   onBehalfOf : Reference ;
}
