import { AuditEventParticipantNetworkTypeEnum } from './AuditEventParticipantNetworkTypeEnum'
import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'

export class AuditEvent_Network      extends BackboneElement
{

   static def : string = 'AuditEvent_Network';
   address : string ;
   type : AuditEventParticipantNetworkTypeEnum ;
}
