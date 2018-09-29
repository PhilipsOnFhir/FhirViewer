import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'

export class MedicationKnowledge_Schedule      extends BackboneElement
{

   static def : string = 'MedicationKnowledge_Schedule';
   jurisdiction : Reference ;
   schedule : CodeableConcept ;
}
