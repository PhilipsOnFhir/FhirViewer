import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { ResourceTypeEnum } from './ResourceTypeEnum'

export class MessageDefinition_Focus      extends BackboneElement
{

   static def : string = 'MessageDefinition_Focus';
   code : ResourceTypeEnum ;
   profile : string ;
   min : string ;
   max : string ;
}
