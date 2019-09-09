import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'

export class DiagnosticRequest_Requester      extends BackboneElement
{

   static def : string = 'DiagnosticRequest_Requester';
   agent : Reference ;
   onBehalfOf : Reference ;
}
