import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { Order_When } from './Order_When'
import { Reference } from './Reference'

export class Order      extends DomainResource
{

   static def : string = 'Order';
   identifier : Identifier [];
   date : string ;
   subject : Reference ;
   source : Reference ;
   target : Reference ;
   reasonCodeableConcept : CodeableConcept ;
   reasonReference : Reference ;
   when : Order_When ;
   detail : Reference [];
}
