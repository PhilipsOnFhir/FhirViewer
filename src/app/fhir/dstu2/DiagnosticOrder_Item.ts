import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DiagnosticOrderStatusEnum } from './DiagnosticOrderStatusEnum'
import { DiagnosticOrder_Event } from './DiagnosticOrder_Event'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'

export class DiagnosticOrder_Item      extends BackboneElement
{

   static def : string = 'DiagnosticOrder_Item';
   code : CodeableConcept ;
   specimen : Reference [];
   bodySite : CodeableConcept ;
   status : DiagnosticOrderStatusEnum ;
   event : DiagnosticOrder_Event [];
}
