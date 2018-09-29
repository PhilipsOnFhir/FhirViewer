import { Annotation } from './Annotation'
import { ChargeItemStatusEnum } from './ChargeItemStatusEnum'
import { ChargeItem_Performer } from './ChargeItem_Performer'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { Money } from './Money'
import { Period } from './Period'
import { Quantity } from './Quantity'
import { Reference } from './Reference'
import { Timing } from './Timing'

export class ChargeItem      extends DomainResource
{

   static def : string = 'ChargeItem';
   identifier : Identifier [];
   definition : string [];
   status : ChargeItemStatusEnum ;
   partOf : Reference [];
   code : CodeableConcept ;
   subject : Reference ;
   context : Reference ;
   occurrenceDateTime : string ;
   occurrencePeriod : Period ;
   occurrenceTiming : Timing ;
   performer : ChargeItem_Performer [];
   performingOrganization : Reference ;
   requestingOrganization : Reference ;
   costCenter : Reference ;
   quantity : Quantity ;
   bodysite : CodeableConcept [];
   factorOverride : string ;
   priceOverride : Money ;
   overrideReason : string ;
   enterer : Reference ;
   enteredDate : string ;
   reason : CodeableConcept [];
   service : Reference [];
   productReference : Reference ;
   productCodeableConcept : CodeableConcept ;
   account : Reference [];
   note : Annotation [];
   supportingInformation : Reference [];
}
