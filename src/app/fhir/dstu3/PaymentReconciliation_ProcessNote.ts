import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'

export class PaymentReconciliation_ProcessNote      extends BackboneElement
{

   static def : string = 'PaymentReconciliation_ProcessNote';
   type : CodeableConcept ;
   text : string ;
}
