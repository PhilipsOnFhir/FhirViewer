import { BackboneElement } from './BackboneElement'
import { Coding } from './Coding'
import { DomainResource } from './DomainResource'

export class Claim_Diagnosis      extends BackboneElement
{

   static def : string = 'Claim_Diagnosis';
   sequence : string ;
   diagnosis : Coding ;
}
