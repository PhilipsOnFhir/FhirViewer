import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'

export class MedicationPrescription_Substitution      extends BackboneElement
{

   static def : string = 'MedicationPrescription_Substitution';
   type : CodeableConcept ;
   reason : CodeableConcept ;
}
