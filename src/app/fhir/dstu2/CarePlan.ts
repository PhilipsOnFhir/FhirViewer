import { Annotation } from './Annotation'
import { CarePlanStatusEnum } from './CarePlanStatusEnum'
import { CarePlan_Activity } from './CarePlan_Activity'
import { CarePlan_Participant } from './CarePlan_Participant'
import { CarePlan_RelatedPlan } from './CarePlan_RelatedPlan'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { Period } from './Period'
import { Reference } from './Reference'

export class CarePlan      extends DomainResource
{

   static def : string = 'CarePlan';
   identifier : Identifier [];
   subject : Reference ;
   status : CarePlanStatusEnum ;
   context : Reference ;
   period : Period ;
   author : Reference [];
   modified : string ;
   category : CodeableConcept [];
   description : string ;
   addresses : Reference [];
   support : Reference [];
   relatedPlan : CarePlan_RelatedPlan [];
   participant : CarePlan_Participant [];
   goal : Reference [];
   activity : CarePlan_Activity [];
   note : Annotation ;
}
