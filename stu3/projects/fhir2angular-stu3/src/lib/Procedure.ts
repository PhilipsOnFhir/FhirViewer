import { Annotation } from './Annotation'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { EventStatusEnum } from './EventStatusEnum'
import { Identifier } from './Identifier'
import { Period } from './Period'
import { Procedure_FocalDevice } from './Procedure_FocalDevice'
import { Procedure_Performer } from './Procedure_Performer'
import { Reference } from './Reference'

export class Procedure      extends DomainResource
{

   static def : string = 'Procedure';
   identifier : Identifier [];
   definition : Reference [];
   basedOn : Reference [];
   partOf : Reference [];
   status : EventStatusEnum ;
   notDone : boolean ;
   notDoneReason : CodeableConcept ;
   category : CodeableConcept ;
   code : CodeableConcept ;
   subject : Reference ;
   context : Reference ;
   performedDateTime : string ;
   performedPeriod : Period ;
   performer : Procedure_Performer [];
   location : Reference ;
   reasonCode : CodeableConcept [];
   reasonReference : Reference [];
   bodySite : CodeableConcept [];
   outcome : CodeableConcept ;
   report : Reference [];
   complication : CodeableConcept [];
   complicationDetail : Reference [];
   followUp : CodeableConcept [];
   note : Annotation [];
   focalDevice : Procedure_FocalDevice [];
   usedReference : Reference [];
   usedCode : CodeableConcept [];
}
