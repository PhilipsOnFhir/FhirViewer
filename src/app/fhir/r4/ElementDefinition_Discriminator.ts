import { DiscriminatorTypeEnum } from './DiscriminatorTypeEnum'
import { DomainResource } from './DomainResource'
import { Element } from './Element'

export class ElementDefinition_Discriminator      extends Element
{

   static def : string = 'ElementDefinition_Discriminator';
   type : DiscriminatorTypeEnum ;
   path : string ;
}
