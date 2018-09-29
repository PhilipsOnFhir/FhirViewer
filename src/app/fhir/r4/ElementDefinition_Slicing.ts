import { DomainResource } from './DomainResource'
import { Element } from './Element'
import { ElementDefinition_Discriminator } from './ElementDefinition_Discriminator'
import { SlicingRulesEnum } from './SlicingRulesEnum'

export class ElementDefinition_Slicing      extends Element
{

   static def : string = 'ElementDefinition_Slicing';
   discriminator : ElementDefinition_Discriminator [];
   description : string ;
   ordered : string ;
   rules : SlicingRulesEnum ;
}
