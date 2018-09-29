import { AggregationModeEnum } from './AggregationModeEnum'
import { DomainResource } from './DomainResource'
import { Element } from './Element'
import { ReferenceVersionRulesEnum } from './ReferenceVersionRulesEnum'

export class ElementDefinition_Type      extends Element
{

   static def : string = 'ElementDefinition_Type';
   code : string ;
   profile : string [];
   targetProfile : string [];
   aggregation : AggregationModeEnum [];
   versioning : ReferenceVersionRulesEnum ;
}
