import { BackboneElement } from './BackboneElement'
import { CarePlanRelationshipEnum } from './CarePlanRelationshipEnum'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'

export class CarePlan_RelatedPlan      extends BackboneElement
{

   static def : string = 'CarePlan_RelatedPlan';
   code : CarePlanRelationshipEnum ;
   plan : Reference ;
}
