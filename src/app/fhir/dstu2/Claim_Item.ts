import { BackboneElement } from './BackboneElement'
import { Claim_Detail } from './Claim_Detail'
import { Claim_Prosthesis } from './Claim_Prosthesis'
import { Coding } from './Coding'
import { DomainResource } from './DomainResource'
import { Money } from './Money'
import { Reference } from './Reference'
import { SimpleQuantity } from './SimpleQuantity'

export class Claim_Item      extends BackboneElement
{

   static def : string = 'Claim_Item';
   sequence : string ;
   type : Coding ;
   provider : Reference ;
   diagnosisLinkId : string [];
   service : Coding ;
   serviceDate : string ;
   quantity : SimpleQuantity ;
   unitPrice : Money ;
   factor : string ;
   points : string ;
   net : Money ;
   udi : Coding ;
   bodySite : Coding ;
   subSite : Coding [];
   modifier : Coding [];
   detail : Claim_Detail [];
   prosthesis : Claim_Prosthesis ;
}
