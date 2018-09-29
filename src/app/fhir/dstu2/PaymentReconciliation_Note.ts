import { BackboneElement } from './BackboneElement'
import { Coding } from './Coding'
import { DomainResource } from './DomainResource'

export class PaymentReconciliation_Note      extends BackboneElement
{

   static def : string = 'PaymentReconciliation_Note';
   type : Coding ;
   text : string ;
}
