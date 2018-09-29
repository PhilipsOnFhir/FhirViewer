import { BackboneElement } from './BackboneElement'
import { DocumentModeEnum } from './DocumentModeEnum'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'

export class Conformance_Document      extends BackboneElement
{

   static def : string = 'Conformance_Document';
   mode : DocumentModeEnum ;
   documentation : string ;
   profile : Reference ;
}
