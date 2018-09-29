import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'

export class AuditEvent_Detail      extends BackboneElement
{

   static def : string = 'AuditEvent_Detail';
   type : string ;
   valueString : string ;
   valueBase64Binary : string ;
}
