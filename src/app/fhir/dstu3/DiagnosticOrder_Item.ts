import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DiagnosticOrderStatusEnum } from './DiagnosticOrderStatusEnum'
import { DiagnosticOrder_Event } from './DiagnosticOrder_Event'
import { DomainResource } from './DomainResource'

export class DiagnosticOrder_Item      extends BackboneElement
{

   static def : string = 'DiagnosticOrder_Item';
   code : CodeableConcept ;
   bodySite : CodeableConcept ;
   status : DiagnosticOrderStatusEnum ;
   event : DiagnosticOrder_Event [];
}
