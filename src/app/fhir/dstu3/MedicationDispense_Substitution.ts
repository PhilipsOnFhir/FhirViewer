import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'

export class MedicationDispense_Substitution      extends BackboneElement
{

   static def : string = 'MedicationDispense_Substitution';
   wasSubstituted : string ;
   type : CodeableConcept ;
   reason : CodeableConcept [];
   responsibleParty : Reference [];
}
