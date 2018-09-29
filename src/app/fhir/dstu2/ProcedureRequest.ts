import { Annotation } from './Annotation'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { Period } from './Period'
import { ProcedureRequestPriorityEnum } from './ProcedureRequestPriorityEnum'
import { ProcedureRequestStatusEnum } from './ProcedureRequestStatusEnum'
import { Reference } from './Reference'
import { Timing } from './Timing'

export class ProcedureRequest      extends DomainResource
{

   static def : string = 'ProcedureRequest';
   identifier : Identifier [];
   subject : Reference ;
   code : CodeableConcept ;
   bodySite : CodeableConcept [];
   reasonCodeableConcept : CodeableConcept ;
   reasonReference : Reference ;
   scheduledDateTime : string ;
   scheduledPeriod : Period ;
   scheduledTiming : Timing ;
   encounter : Reference ;
   performer : Reference ;
   status : ProcedureRequestStatusEnum ;
   notes : Annotation [];
   asNeededBoolean : string ;
   asNeededCodeableConcept : CodeableConcept ;
   orderedOn : string ;
   orderer : Reference ;
   priority : ProcedureRequestPriorityEnum ;
}
