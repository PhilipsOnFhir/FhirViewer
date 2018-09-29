import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { TypeRestfulInteractionEnum } from './TypeRestfulInteractionEnum'

export class CapabilityStatement_Interaction      extends BackboneElement
{

   static def : string = 'CapabilityStatement_Interaction';
   code : TypeRestfulInteractionEnum ;
   documentation : string ;
}
