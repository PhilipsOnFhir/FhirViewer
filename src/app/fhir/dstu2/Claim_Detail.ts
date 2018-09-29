import { BackboneElement } from './BackboneElement'
import { Claim_SubDetail } from './Claim_SubDetail'
import { Coding } from './Coding'
import { DomainResource } from './DomainResource'
import { Money } from './Money'
import { SimpleQuantity } from './SimpleQuantity'

export class Claim_Detail      extends BackboneElement
{

   static def : string = 'Claim_Detail';
   sequence : string ;
   type : Coding ;
   service : Coding ;
   quantity : SimpleQuantity ;
   unitPrice : Money ;
   factor : string ;
   points : string ;
   net : Money ;
   udi : Coding ;
   subDetail : Claim_SubDetail [];
}
