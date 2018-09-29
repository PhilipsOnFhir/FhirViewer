import { BackboneElement } from './BackboneElement'
import { Coding } from './Coding'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'

export class AuditEvent_Source      extends BackboneElement
{

   static def : string = 'AuditEvent_Source';
   site : string ;
   identifier : Identifier ;
   type : Coding [];
}
