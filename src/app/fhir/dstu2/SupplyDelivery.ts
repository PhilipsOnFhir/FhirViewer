import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { Period } from './Period'
import { Reference } from './Reference'
import { SimpleQuantity } from './SimpleQuantity'
import { SupplyDeliveryStatusEnum } from './SupplyDeliveryStatusEnum'

export class SupplyDelivery      extends DomainResource
{

   static def : string = 'SupplyDelivery';
   identifier : Identifier ;
   status : SupplyDeliveryStatusEnum ;
   patient : Reference ;
   type : CodeableConcept ;
   quantity : SimpleQuantity ;
   suppliedItem : Reference ;
   supplier : Reference ;
   whenPrepared : Period ;
   time : string ;
   destination : Reference ;
   receiver : Reference [];
}
