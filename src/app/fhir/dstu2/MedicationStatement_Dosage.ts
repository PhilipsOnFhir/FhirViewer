import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Range } from './Range'
import { Ratio } from './Ratio'
import { Reference } from './Reference'
import { SimpleQuantity } from './SimpleQuantity'
import { Timing } from './Timing'

export class MedicationStatement_Dosage      extends BackboneElement
{

   static def : string = 'MedicationStatement_Dosage';
   text : string ;
   timing : Timing ;
   asNeededBoolean : string ;
   asNeededCodeableConcept : CodeableConcept ;
   siteCodeableConcept : CodeableConcept ;
   siteReference : Reference ;
   route : CodeableConcept ;
   method : CodeableConcept ;
   quantityQuantity : SimpleQuantity ;
   quantityRange : Range ;
   rateRatio : Ratio ;
   rateRange : Range ;
   maxDosePerPeriod : Ratio ;
}
