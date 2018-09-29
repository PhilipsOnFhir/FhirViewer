import { Annotation } from './Annotation'
import { ChargeItemStatusEnum } from './ChargeItemStatusEnum'
import { ChargeItem_Participant } from './ChargeItem_Participant'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { Period } from './Period'
import { Quantity } from './Quantity'
import { Reference } from './Reference'
import { Timing } from './Timing'

export class ChargeItem      extends DomainResource
{

   static def : string = 'ChargeItem';
   identifier : Identifier ;
   definition : string [];
   status : ChargeItemStatusEnum ;
   partOf : Reference [];
   code : CodeableConcept ;
   subject : Reference ;
   context : Reference ;
   occurrenceDateTime : string ;
   occurrencePeriod : Period ;
   occurrenceTiming : Timing ;
   participant : ChargeItem_Participant [];
   performingOrganization : Reference ;
   requestingOrganization : Reference ;
   quantity : Quantity ;
   bodysite : CodeableConcept [];
   factorOverride : string ;
   priceOverride : string ;
   overrideReason : string ;
   enterer : Reference ;
   enteredDate : string ;
   reason : CodeableConcept [];
   service : Reference [];
   account : Reference [];
   note : Annotation [];
   supportingInformation : Reference [];
}
