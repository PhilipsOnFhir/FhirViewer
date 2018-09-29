import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'

export class MedicationDispense_Performer      extends BackboneElement
{

   static def : string = 'MedicationDispense_Performer';
   function : CodeableConcept ;
   actor : Reference ;
}
