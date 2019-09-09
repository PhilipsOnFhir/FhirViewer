import { BackboneElement } from './BackboneElement'
import { CompartmentTypeEnum } from './CompartmentTypeEnum'
import { DomainResource } from './DomainResource'
import { GraphCompartmentRuleEnum } from './GraphCompartmentRuleEnum'

export class GraphDefinition_Compartment      extends BackboneElement
{

   static def : string = 'GraphDefinition_Compartment';
   code : CompartmentTypeEnum ;
   rule : GraphCompartmentRuleEnum ;
   expression : string ;
   description : string ;
}
