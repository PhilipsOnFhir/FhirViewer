import { BackboneElement } from './BackboneElement'
import { DocumentModeEnum } from './DocumentModeEnum'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'

export class CapabilityStatement_Document      extends BackboneElement
{

   static def : string = 'CapabilityStatement_Document';
   mode : DocumentModeEnum ;
   documentation : string ;
   profile : Reference ;
}
