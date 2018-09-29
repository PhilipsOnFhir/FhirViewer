import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { Period } from './Period'
import { Quantity } from './Quantity'
import { Reference } from './Reference'
import { RequestPriorityEnum } from './RequestPriorityEnum'
import { SupplyRequestStatusEnum } from './SupplyRequestStatusEnum'
import { SupplyRequest_Parameter } from './SupplyRequest_Parameter'
import { Timing } from './Timing'

export class SupplyRequest      extends DomainResource
{

   static def : string = 'SupplyRequest';
   identifier : Identifier ;
   status : SupplyRequestStatusEnum ;
   category : CodeableConcept ;
   priority : RequestPriorityEnum ;
   itemCodeableConcept : CodeableConcept ;
   itemReference : Reference ;
   quantity : Quantity ;
   parameter : SupplyRequest_Parameter [];
   occurrenceDateTime : string ;
   occurrencePeriod : Period ;
   occurrenceTiming : Timing ;
   authoredOn : string ;
   requester : Reference ;
   supplier : Reference [];
   reasonCode : CodeableConcept [];
   reasonReference : Reference [];
   deliverFrom : Reference ;
   deliverTo : Reference ;
}
