import { Annotation } from './Annotation'
import { BackboneElement } from './BackboneElement'
import { CarePlan_Detail } from './CarePlan_Detail'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'

export class CarePlan_Activity      extends BackboneElement
{

   static def : string = 'CarePlan_Activity';
   outcomeCodeableConcept : CodeableConcept [];
   outcomeReference : Reference [];
   progress : Annotation [];
   reference : Reference ;
   detail : CarePlan_Detail ;
}
