import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'

export class MedicationOrder_Substitution      extends BackboneElement
{

   static def : string = 'MedicationOrder_Substitution';
   allowed : string ;
   reason : CodeableConcept ;
}
