import { Annotation } from './Annotation'
import { CodeableConcept } from './CodeableConcept'
import { DiagnosticOrderPriorityEnum } from './DiagnosticOrderPriorityEnum'
import { DiagnosticOrderStatusEnum } from './DiagnosticOrderStatusEnum'
import { DiagnosticOrder_Event } from './DiagnosticOrder_Event'
import { DiagnosticOrder_Item } from './DiagnosticOrder_Item'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { Reference } from './Reference'

export class DiagnosticOrder      extends DomainResource
{

   static def : string = 'DiagnosticOrder';
   subject : Reference ;
   orderer : Reference ;
   identifier : Identifier [];
   encounter : Reference ;
   reason : CodeableConcept [];
   supportingInformation : Reference [];
   specimen : Reference [];
   status : DiagnosticOrderStatusEnum ;
   priority : DiagnosticOrderPriorityEnum ;
   event : DiagnosticOrder_Event [];
   item : DiagnosticOrder_Item [];
   note : Annotation [];
}
