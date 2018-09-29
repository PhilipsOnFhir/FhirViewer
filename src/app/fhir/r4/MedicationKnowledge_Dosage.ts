import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Dosage } from './Dosage'

export class MedicationKnowledge_Dosage      extends BackboneElement
{

   static def : string = 'MedicationKnowledge_Dosage';
   type : CodeableConcept ;
   dosage : Dosage [];
}
