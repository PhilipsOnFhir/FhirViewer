import { Annotation } from './Annotation'
import { BackboneElement } from './BackboneElement'
import { CarePlan_Detail } from './CarePlan_Detail'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'

export class CarePlan_Activity      extends BackboneElement
{

   static def : string = 'CarePlan_Activity';
   actionResulting : Reference [];
   progress : Annotation [];
   reference : Reference ;
   detail : CarePlan_Detail ;
}
