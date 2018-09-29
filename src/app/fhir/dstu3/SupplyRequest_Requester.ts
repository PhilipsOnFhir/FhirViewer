import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'

export class SupplyRequest_Requester      extends BackboneElement
{

   static def : string = 'SupplyRequest_Requester';
   agent : Reference ;
   onBehalfOf : Reference ;
}
