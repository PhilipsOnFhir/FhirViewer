import { DomainResource } from './DomainResource'
import { Element } from './Element'
import { SlicingRulesEnum } from './SlicingRulesEnum'

export class ElementDefinition_Slicing      extends Element
{

   static def : string = 'ElementDefinition_Slicing';
   discriminator : string [];
   description : string ;
   ordered : string ;
   rules : SlicingRulesEnum ;
}
