import { AdverseEventCategoryEnum } from './AdverseEventCategoryEnum'
import { AdverseEvent_SuspectEntity } from './AdverseEvent_SuspectEntity'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { Reference } from './Reference'

export class AdverseEvent      extends DomainResource
{

   static def : string = 'AdverseEvent';
   identifier : Identifier ;
   category : AdverseEventCategoryEnum ;
   type : CodeableConcept ;
   subject : Reference ;
   date : string ;
   reaction : Reference [];
   location : Reference ;
   seriousness : CodeableConcept ;
   outcome : CodeableConcept ;
   recorder : Reference ;
   eventParticipant : Reference ;
   description : string ;
   suspectEntity : AdverseEvent_SuspectEntity [];
   subjectMedicalHistory : Reference [];
   referenceDocument : Reference [];
   study : Reference [];
}
