import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Range } from './Range'
import { Ratio } from './Ratio'
import { Reference } from './Reference'
import { SimpleQuantity } from './SimpleQuantity'

export class MedicationAdministration_Dosage      extends BackboneElement
{

   static def : string = 'MedicationAdministration_Dosage';
   text : string ;
   siteCodeableConcept : CodeableConcept ;
   siteReference : Reference ;
   route : CodeableConcept ;
   method : CodeableConcept ;
   quantity : SimpleQuantity ;
   rateRatio : Ratio ;
   rateRange : Range ;
}
