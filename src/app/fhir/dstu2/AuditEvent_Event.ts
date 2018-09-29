import { AuditEventActionEnum } from './AuditEventActionEnum'
import { AuditEventOutcomeEnum } from './AuditEventOutcomeEnum'
import { BackboneElement } from './BackboneElement'
import { Coding } from './Coding'
import { DomainResource } from './DomainResource'

export class AuditEvent_Event      extends BackboneElement
{

   static def : string = 'AuditEvent_Event';
   type : Coding ;
   subtype : Coding [];
   action : AuditEventActionEnum ;
   dateTime : string ;
   outcome : AuditEventOutcomeEnum ;
   outcomeDesc : string ;
   purposeOfEvent : Coding [];
}
