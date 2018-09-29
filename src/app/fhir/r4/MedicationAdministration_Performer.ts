import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'

export class MedicationAdministration_Performer      extends BackboneElement
{

   static def : string = 'MedicationAdministration_Performer';
   function : CodeableConcept ;
   actor : Reference ;
}
