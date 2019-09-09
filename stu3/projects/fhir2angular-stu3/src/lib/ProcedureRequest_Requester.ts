import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'

export class ProcedureRequest_Requester      extends BackboneElement
{

   static def : string = 'ProcedureRequest_Requester';
   agent : Reference ;
   onBehalfOf : Reference ;
}
