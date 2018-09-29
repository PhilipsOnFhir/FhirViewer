import { ConstraintSeverityEnum } from './ConstraintSeverityEnum'
import { DomainResource } from './DomainResource'
import { Element } from './Element'

export class ElementDefinition_Constraint      extends Element
{

   static def : string = 'ElementDefinition_Constraint';
   key : string ;
   requirements : string ;
   severity : ConstraintSeverityEnum ;
   human : string ;
   xpath : string ;
}
