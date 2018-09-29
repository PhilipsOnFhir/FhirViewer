import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { ProtocolActivityDefinitionCategoryEnum } from './ProtocolActivityDefinitionCategoryEnum'
import { Quantity } from './Quantity'
import { Reference } from './Reference'
import { Timing } from './Timing'

export class Protocol_Detail      extends BackboneElement
{

   static def : string = 'Protocol_Detail';
   category : ProtocolActivityDefinitionCategoryEnum ;
   code : CodeableConcept ;
   timingCodeableConcept : CodeableConcept ;
   timingTiming : Timing ;
   location : Reference ;
   performer : Reference [];
   productReference : Reference ;
   productCodeableConcept : CodeableConcept ;
   quantity : Quantity ;
   description : string ;
}
