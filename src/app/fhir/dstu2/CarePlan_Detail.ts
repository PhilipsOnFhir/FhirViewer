import { BackboneElement } from './BackboneElement'
import { CarePlanActivityStatusEnum } from './CarePlanActivityStatusEnum'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Period } from './Period'
import { Reference } from './Reference'
import { SimpleQuantity } from './SimpleQuantity'
import { Timing } from './Timing'

export class CarePlan_Detail      extends BackboneElement
{

   static def : string = 'CarePlan_Detail';
   category : CodeableConcept ;
   code : CodeableConcept ;
   reasonCode : CodeableConcept [];
   reasonReference : Reference [];
   goal : Reference [];
   status : CarePlanActivityStatusEnum ;
   statusReason : CodeableConcept ;
   prohibited : string ;
   scheduledTiming : Timing ;
   scheduledPeriod : Period ;
   scheduledString : string ;
   location : Reference ;
   performer : Reference [];
   productCodeableConcept : CodeableConcept ;
   productReference : Reference ;
   dailyAmount : SimpleQuantity ;
   quantity : SimpleQuantity ;
   description : string ;
}
