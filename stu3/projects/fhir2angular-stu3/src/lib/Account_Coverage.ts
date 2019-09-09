import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'

export class Account_Coverage      extends BackboneElement
{

   static def : string = 'Account_Coverage';
   coverage : Reference ;
   priority : string ;
}
