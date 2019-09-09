import { Annotation } from './Annotation'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { GoalStatusEnum } from './GoalStatusEnum'
import { Goal_Target } from './Goal_Target'
import { Identifier } from './Identifier'
import { Reference } from './Reference'

export class Goal      extends DomainResource
{

   static def : string = 'Goal';
   identifier : Identifier [];
   status : GoalStatusEnum ;
   category : CodeableConcept [];
   priority : CodeableConcept ;
   description : CodeableConcept ;
   subject : Reference ;
   startDate : string ;
   startCodeableConcept : CodeableConcept ;
   target : Goal_Target ;
   statusDate : string ;
   statusReason : string ;
   expressedBy : Reference ;
   addresses : Reference [];
   note : Annotation [];
   outcomeCode : CodeableConcept [];
   outcomeReference : Reference [];
}
