import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { SystemRestfulInteractionEnum } from './SystemRestfulInteractionEnum'

export class CapabilityStatement_Interaction1      extends BackboneElement
{

   static def : string = 'CapabilityStatement_Interaction1';
   code : SystemRestfulInteractionEnum ;
   documentation : string ;
}
