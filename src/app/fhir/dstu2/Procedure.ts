import { Annotation } from './Annotation'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { Period } from './Period'
import { ProcedureStatusEnum } from './ProcedureStatusEnum'
import { Procedure_FocalDevice } from './Procedure_FocalDevice'
import { Procedure_Performer } from './Procedure_Performer'
import { Reference } from './Reference'

export class Procedure      extends DomainResource
{

   static def : string = 'Procedure';
   identifier : Identifier [];
   subject : Reference ;
   status : ProcedureStatusEnum ;
   category : CodeableConcept ;
   code : CodeableConcept ;
   notPerformed : string ;
   reasonNotPerformed : CodeableConcept [];
   bodySite : CodeableConcept [];
   reasonCodeableConcept : CodeableConcept ;
   reasonReference : Reference ;
   performer : Procedure_Performer [];
   performedDateTime : string ;
   performedPeriod : Period ;
   encounter : Reference ;
   location : Reference ;
   outcome : CodeableConcept ;
   report : Reference [];
   complication : CodeableConcept [];
   followUp : CodeableConcept [];
   request : Reference ;
   notes : Annotation [];
   focalDevice : Procedure_FocalDevice [];
   used : Reference [];
}
