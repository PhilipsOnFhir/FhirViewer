import { BackboneElement } from './BackboneElement'
import { Coding } from './Coding'
import { DomainResource } from './DomainResource'
import { Money } from './Money'
import { Reference } from './Reference'

export class PaymentReconciliation_Detail      extends BackboneElement
{

   static def : string = 'PaymentReconciliation_Detail';
   type : Coding ;
   request : Reference ;
   responce : Reference ;
   submitter : Reference ;
   payee : Reference ;
   date : string ;
   amount : Money ;
}
