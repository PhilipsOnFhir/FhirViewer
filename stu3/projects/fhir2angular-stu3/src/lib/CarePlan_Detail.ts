import { BackboneElement } from './BackboneElement'
import { CarePlanActivityStatusEnum } from './CarePlanActivityStatusEnum'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Period } from './Period'
import { Quantity } from './Quantity'
import { Reference } from './Reference'
import { Timing } from './Timing'

export class CarePlan_Detail      extends BackboneElement
{

   static def : string = 'CarePlan_Detail';
   category : CodeableConcept ;
   definition : Reference ;
   code : CodeableConcept ;
   reasonCode : CodeableConcept [];
   reasonReference : Reference [];
   goal : Reference [];
   status : CarePlanActivityStatusEnum ;
   statusReason : string ;
   prohibited : boolean ;
   scheduledTiming : Timing ;
   scheduledPeriod : Period ;
   scheduledString : string ;
   location : Reference ;
   performer : Reference [];
   productCodeableConcept : CodeableConcept ;
   productReference : Reference ;
   dailyAmount : Quantity ;
   quantity : Quantity ;
   description : string ;
}
