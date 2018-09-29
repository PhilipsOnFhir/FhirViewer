import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { SystemRestfulInteractionEnum } from './SystemRestfulInteractionEnum'

export class Conformance_Interaction1      extends BackboneElement
{

   static def : string = 'Conformance_Interaction1';
   code : SystemRestfulInteractionEnum ;
   documentation : string ;
}
