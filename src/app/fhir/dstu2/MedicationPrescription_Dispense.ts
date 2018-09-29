import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Duration } from './Duration'
import { Period } from './Period'
import { Reference } from './Reference'
import { SimpleQuantity } from './SimpleQuantity'

export class MedicationPrescription_Dispense      extends BackboneElement
{

   static def : string = 'MedicationPrescription_Dispense';
   medicationCodeableConcept : CodeableConcept ;
   medicationReference : Reference ;
   validityPeriod : Period ;
   numberOfRepeatsAllowed : string ;
   quantity : SimpleQuantity ;
   expectedSupplyDuration : Duration ;
}
