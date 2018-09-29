import { BackboneElement } from './BackboneElement'
import { DocumentModeEnum } from './DocumentModeEnum'
import { DomainResource } from './DomainResource'

export class CapabilityStatement_Document      extends BackboneElement
{

   static def : string = 'CapabilityStatement_Document';
   mode : DocumentModeEnum ;
   documentation : string ;
   profile : string ;
}
