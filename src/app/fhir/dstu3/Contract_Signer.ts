import { BackboneElement } from './BackboneElement'
import { Coding } from './Coding'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'
import { Signature } from './Signature'

export class Contract_Signer      extends BackboneElement
{

   static def : string = 'Contract_Signer';
   type : Coding ;
   party : Reference ;
   signature : Signature [];
}
