import { Annotation } from './Annotation'
import { CarePlanIntentEnum } from './CarePlanIntentEnum'
import { CarePlanStatusEnum } from './CarePlanStatusEnum'
import { CarePlan_Activity } from './CarePlan_Activity'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { Period } from './Period'
import { Reference } from './Reference'

export class CarePlan      extends DomainResource
{

   static def : string = 'CarePlan';
   identifier : Identifier [];
   definition : Reference [];
   basedOn : Reference [];
   replaces : Reference [];
   partOf : Reference [];
   status : CarePlanStatusEnum ;
   intent : CarePlanIntentEnum ;
   category : CodeableConcept [];
   title : string ;
   description : string ;
   subject : Reference ;
   context : Reference ;
   period : Period ;
   author : Reference [];
   careTeam : Reference [];
   addresses : Reference [];
   supportingInfo : Reference [];
   goal : Reference [];
   activity : CarePlan_Activity [];
   note : Annotation [];
}
