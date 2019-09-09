import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'

export class PlanDefinition_DynamicValue      extends BackboneElement
{

   static def : string = 'PlanDefinition_DynamicValue';
   description : string ;
   path : string ;
   language : string ;
   expression : string ;
}
