import { AuditEvent_Event } from './AuditEvent_Event'
import { AuditEvent_Object } from './AuditEvent_Object'
import { AuditEvent_Participant } from './AuditEvent_Participant'
import { AuditEvent_Source } from './AuditEvent_Source'
import { DomainResource } from './DomainResource'

export class AuditEvent      extends DomainResource
{

   static def : string = 'AuditEvent';
   event : AuditEvent_Event ;
   participant : AuditEvent_Participant [];
   source : AuditEvent_Source ;
   object : AuditEvent_Object [];
}
