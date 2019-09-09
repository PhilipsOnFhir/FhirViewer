import { AuditEventActionEnum } from './AuditEventActionEnum'
import { AuditEventOutcomeEnum } from './AuditEventOutcomeEnum'
import { AuditEvent_Agent } from './AuditEvent_Agent'
import { AuditEvent_Entity } from './AuditEvent_Entity'
import { AuditEvent_Source } from './AuditEvent_Source'
import { CodeableConcept } from './CodeableConcept'
import { Coding } from './Coding'
import { DomainResource } from './DomainResource'

export class AuditEvent      extends DomainResource
{

   static def : string = 'AuditEvent';
   type : Coding ;
   subtype : Coding [];
   action : AuditEventActionEnum ;
   recorded : string ;
   outcome : AuditEventOutcomeEnum ;
   outcomeDesc : string ;
   purposeOfEvent : CodeableConcept [];
   agent : AuditEvent_Agent [];
   source : AuditEvent_Source ;
   entity : AuditEvent_Entity [];
}
