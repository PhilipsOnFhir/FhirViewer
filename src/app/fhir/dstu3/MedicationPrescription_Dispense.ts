import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Period } from './Period'
import { Reference } from './Reference'

export class MedicationPrescription_Dispense      extends BackboneElement
{

   static def : string = 'MedicationPrescription_Dispense';
   medicationCodeableConcept : CodeableConcept ;
   medicationReference : Reference ;
   validityPeriod : Period ;
   numberOfRepeatsAllowed : string ;
   quantity : string ;
   expectedSupplyDuration : string ;
}
