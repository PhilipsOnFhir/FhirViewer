import { BackboneElement } from './BackboneElement'
import { Coding } from './Coding'
import { DomainResource } from './DomainResource'
import { Money } from './Money'
import { SimpleQuantity } from './SimpleQuantity'

export class Claim_SubDetail      extends BackboneElement
{

   static def : string = 'Claim_SubDetail';
   sequence : string ;
   type : Coding ;
   service : Coding ;
   quantity : SimpleQuantity ;
   unitPrice : Money ;
   factor : string ;
   points : string ;
   net : Money ;
   udi : Coding ;
}
