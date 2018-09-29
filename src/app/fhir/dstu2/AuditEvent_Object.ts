import { AuditEvent_Detail } from './AuditEvent_Detail'
import { BackboneElement } from './BackboneElement'
import { Coding } from './Coding'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { Reference } from './Reference'

export class AuditEvent_Object      extends BackboneElement
{

   static def : string = 'AuditEvent_Object';
   identifier : Identifier ;
   reference : Reference ;
   type : Coding ;
   role : Coding ;
   lifecycle : Coding ;
   securityLabel : Coding [];
   name : string ;
   description : string ;
   query : string ;
   detail : AuditEvent_Detail [];
}
