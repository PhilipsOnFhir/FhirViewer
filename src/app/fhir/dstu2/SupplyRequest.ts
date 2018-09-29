import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { Reference } from './Reference'
import { SupplyRequestStatusEnum } from './SupplyRequestStatusEnum'
import { SupplyRequest_When } from './SupplyRequest_When'

export class SupplyRequest      extends DomainResource
{

   static def : string = 'SupplyRequest';
   patient : Reference ;
   source : Reference ;
   date : string ;
   identifier : Identifier ;
   status : SupplyRequestStatusEnum ;
   kind : CodeableConcept ;
   orderedItem : Reference ;
   supplier : Reference [];
   reasonCodeableConcept : CodeableConcept ;
   reasonReference : Reference ;
   when : SupplyRequest_When ;
}
