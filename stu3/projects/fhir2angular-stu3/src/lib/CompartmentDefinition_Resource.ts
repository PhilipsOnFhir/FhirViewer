import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { ResourceTypeEnum } from './ResourceTypeEnum'

export class CompartmentDefinition_Resource      extends BackboneElement
{

   static def : string = 'CompartmentDefinition_Resource';
   code : ResourceTypeEnum ;
   param : string [];
   documentation : string ;
}
