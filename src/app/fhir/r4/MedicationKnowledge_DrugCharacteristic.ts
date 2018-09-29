import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Quantity } from './Quantity'

export class MedicationKnowledge_DrugCharacteristic      extends BackboneElement
{

   static def : string = 'MedicationKnowledge_DrugCharacteristic';
   type : CodeableConcept ;
   valueCodeableConcept : CodeableConcept ;
   valueString : string ;
   valueQuantity : Quantity ;
   valueBase64Binary : string ;
}
