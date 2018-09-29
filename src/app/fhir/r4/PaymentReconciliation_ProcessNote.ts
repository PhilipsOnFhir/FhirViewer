import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { NoteTypeEnum } from './NoteTypeEnum'

export class PaymentReconciliation_ProcessNote      extends BackboneElement
{

   static def : string = 'PaymentReconciliation_ProcessNote';
   type : NoteTypeEnum ;
   text : string ;
}
