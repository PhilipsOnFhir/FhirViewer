import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Quantity } from './Quantity'

export class MedicationKnowledge_PatientCharacteristics      extends BackboneElement
{

   static def : string = 'MedicationKnowledge_PatientCharacteristics';
   characteristicCodeableConcept : CodeableConcept ;
   characteristicQuantity : Quantity ;
   value : string [];
}
