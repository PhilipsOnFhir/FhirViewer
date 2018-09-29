import { Annotation } from './Annotation'
import { CarePlanIntentEnum } from './CarePlanIntentEnum'
import { CarePlan_Activity } from './CarePlan_Activity'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { Period } from './Period'
import { Reference } from './Reference'
import { RequestStatusEnum } from './RequestStatusEnum'

export class CarePlan      extends DomainResource
{

   static def : string = 'CarePlan';
   identifier : Identifier [];
   instantiatesCanonical : string [];
   instantiatesUri : string [];
   basedOn : Reference [];
   replaces : Reference [];
   partOf : Reference [];
   status : RequestStatusEnum ;
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
