import { AuditEventAgentNetworkTypeEnum } from './AuditEventAgentNetworkTypeEnum'
import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'

export class AuditEvent_Network      extends BackboneElement
{

   static def : string = 'AuditEvent_Network';
   address : string ;
   type : AuditEventAgentNetworkTypeEnum ;
}
