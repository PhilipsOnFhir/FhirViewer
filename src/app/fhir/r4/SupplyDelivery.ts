import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { Period } from './Period'
import { Reference } from './Reference'
import { SupplyDeliveryStatusEnum } from './SupplyDeliveryStatusEnum'
import { SupplyDelivery_SuppliedItem } from './SupplyDelivery_SuppliedItem'
import { Timing } from './Timing'

export class SupplyDelivery      extends DomainResource
{

   static def : string = 'SupplyDelivery';
   identifier : Identifier [];
   basedOn : Reference [];
   partOf : Reference [];
   status : SupplyDeliveryStatusEnum ;
   patient : Reference ;
   type : CodeableConcept ;
   suppliedItem : SupplyDelivery_SuppliedItem ;
   occurrenceDateTime : string ;
   occurrencePeriod : Period ;
   occurrenceTiming : Timing ;
   supplier : Reference ;
   destination : Reference ;
   receiver : Reference [];
}
