import { AdverseEventActualityEnum } from './AdverseEventActualityEnum'
import { AdverseEvent_SuspectEntity } from './AdverseEvent_SuspectEntity'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { Reference } from './Reference'

export class AdverseEvent      extends DomainResource
{

   static def : string = 'AdverseEvent';
   identifier : Identifier ;
   actuality : AdverseEventActualityEnum ;
   category : CodeableConcept [];
   event : CodeableConcept ;
   subject : Reference ;
   context : Reference ;
   date : string ;
   detected : string ;
   recordedDate : string ;
   resultingCondition : Reference [];
   location : Reference ;
   seriousness : CodeableConcept ;
   severity : CodeableConcept ;
   outcome : CodeableConcept ;
   recorder : Reference ;
   contributor : Reference [];
   suspectEntity : AdverseEvent_SuspectEntity [];
   subjectMedicalHistory : Reference [];
   referenceDocument : Reference [];
   study : Reference [];
}
