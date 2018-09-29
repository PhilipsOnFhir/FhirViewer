import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { TypeRestfulInteractionEnum } from './TypeRestfulInteractionEnum'

export class Conformance_Interaction      extends BackboneElement
{

   static def : string = 'Conformance_Interaction';
   code : TypeRestfulInteractionEnum ;
   documentation : string ;
}
