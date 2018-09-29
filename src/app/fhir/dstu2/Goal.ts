import { Annotation } from './Annotation'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Duration } from './Duration'
import { GoalStatusEnum } from './GoalStatusEnum'
import { Goal_Outcome } from './Goal_Outcome'
import { Identifier } from './Identifier'
import { Reference } from './Reference'

export class Goal      extends DomainResource
{

   static def : string = 'Goal';
   identifier : Identifier [];
   subject : Reference ;
   startDate : string ;
   startCodeableConcept : CodeableConcept ;
   targetDate : string ;
   targetQuantity : Duration ;
   category : CodeableConcept [];
   description : string ;
   status : GoalStatusEnum ;
   statusDate : string ;
   statusReason : CodeableConcept ;
   author : Reference ;
   priority : CodeableConcept ;
   addresses : Reference [];
   note : Annotation [];
   outcome : Goal_Outcome [];
}
