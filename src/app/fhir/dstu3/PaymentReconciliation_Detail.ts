import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'

export class PaymentReconciliation_Detail      extends BackboneElement
{

   static def : string = 'PaymentReconciliation_Detail';
   type : CodeableConcept ;
   request : Reference ;
   response : Reference ;
   submitter : Reference ;
   payee : Reference ;
   date : string ;
   amount : string ;
}
