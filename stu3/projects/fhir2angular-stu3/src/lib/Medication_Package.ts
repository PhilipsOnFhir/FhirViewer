import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Medication_Batch } from './Medication_Batch'
import { Medication_Content } from './Medication_Content'

export class Medication_Package      extends BackboneElement
{

   static def : string = 'Medication_Package';
   container : CodeableConcept ;
   content : Medication_Content [];
   batch : Medication_Batch [];
}
