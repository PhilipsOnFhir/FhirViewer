import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Element } from './Element'
import { Quantity } from './Quantity'
import { Range } from './Range'
import { Ratio } from './Ratio'
import { Timing } from './Timing'

export class Dosage      extends Element
{

   static def : string = 'Dosage';
   sequence : string ;
   text : string ;
   additionalInstruction : CodeableConcept [];
   patientInstruction : string ;
   timing : Timing ;
   asNeededBoolean : string ;
   asNeededCodeableConcept : CodeableConcept ;
   site : CodeableConcept ;
   route : CodeableConcept ;
   method : CodeableConcept ;
   doseRange : Range ;
   doseQuantity : Quantity ;
   maxDosePerPeriod : Ratio ;
   maxDosePerAdministration : Quantity ;
   maxDosePerLifetime : Quantity ;
   rateRatio : Ratio ;
   rateRange : Range ;
   rateQuantity : Quantity ;
}
