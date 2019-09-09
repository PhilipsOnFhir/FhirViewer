import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DiagnosticOrderStatusEnum } from './DiagnosticOrderStatusEnum'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'

export class DiagnosticOrder_Event      extends BackboneElement
{

   static def : string = 'DiagnosticOrder_Event';
   status : DiagnosticOrderStatusEnum ;
   description : CodeableConcept ;
   dateTime : string ;
   actor : Reference ;
}
