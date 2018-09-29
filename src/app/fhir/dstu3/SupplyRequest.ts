import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { Period } from './Period'
import { Reference } from './Reference'
import { RequestPriorityEnum } from './RequestPriorityEnum'
import { SupplyRequestStatusEnum } from './SupplyRequestStatusEnum'
import { SupplyRequest_OrderedItem } from './SupplyRequest_OrderedItem'
import { SupplyRequest_Requester } from './SupplyRequest_Requester'
import { Timing } from './Timing'

export class SupplyRequest      extends DomainResource
{

   static def : string = 'SupplyRequest';
   identifier : Identifier ;
   status : SupplyRequestStatusEnum ;
   category : CodeableConcept ;
   priority : RequestPriorityEnum ;
   orderedItem : SupplyRequest_OrderedItem ;
   occurrenceDateTime : string ;
   occurrencePeriod : Period ;
   occurrenceTiming : Timing ;
   authoredOn : string ;
   requester : SupplyRequest_Requester ;
   supplier : Reference [];
   reasonCodeableConcept : CodeableConcept ;
   reasonReference : Reference ;
   deliverFrom : Reference ;
   deliverTo : Reference ;
}
