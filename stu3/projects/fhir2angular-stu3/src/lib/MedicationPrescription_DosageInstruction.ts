import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Quantity } from './Quantity'
import { Range } from './Range'
import { Ratio } from './Ratio'
import { Timing } from './Timing'

export class MedicationPrescription_DosageInstruction      extends BackboneElement
{

   static def : string = 'MedicationPrescription_DosageInstruction';
   text : string ;
   additionalInstructions : CodeableConcept ;
   timing : Timing ;
   asNeededBoolean : boolean ;
   asNeededCodeableConcept : CodeableConcept ;
   site : CodeableConcept ;
   route : CodeableConcept ;
   method : CodeableConcept ;
   doseRange : Range ;
   doseQuantity : string ;
   rateRatio : Ratio ;
   rateQuantity : Quantity ;
   rateRange : Range ;
   maxDosePerPeriod : Ratio ;
}
