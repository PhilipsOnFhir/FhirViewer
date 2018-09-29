import { BackboneElement } from './BackboneElement'
import { Coding } from './Coding'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'

export class Claim_Payee      extends BackboneElement
{

   static def : string = 'Claim_Payee';
   type : Coding ;
   provider : Reference ;
   organization : Reference ;
   person : Reference ;
}
