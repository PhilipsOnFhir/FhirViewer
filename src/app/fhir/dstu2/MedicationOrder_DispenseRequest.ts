import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Duration } from './Duration'
import { Period } from './Period'
import { Reference } from './Reference'
import { SimpleQuantity } from './SimpleQuantity'

export class MedicationOrder_DispenseRequest      extends BackboneElement
{

   static def : string = 'MedicationOrder_DispenseRequest';
   medicationCodeableConcept : CodeableConcept ;
   medicationReference : Reference ;
   validityPeriod : Period ;
   numberOfRepeatsAllowed : string ;
   quantity : SimpleQuantity ;
   expectedSupplyDuration : Duration ;
}
