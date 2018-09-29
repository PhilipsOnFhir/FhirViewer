import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { Period } from './Period'
import { Reference } from './Reference'

export class Account_Guarantor      extends BackboneElement
{

   static def : string = 'Account_Guarantor';
   party : Reference ;
   onHold : string ;
   period : Period ;
}
