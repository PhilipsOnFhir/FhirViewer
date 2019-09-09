import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'

export class DeviceRequest_Requester      extends BackboneElement
{

   static def : string = 'DeviceRequest_Requester';
   agent : Reference ;
   onBehalfOf : Reference ;
}
