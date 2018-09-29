import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'

export class Encounter_Diagnosis      extends BackboneElement
{

   static def : string = 'Encounter_Diagnosis';
   condition : Reference ;
   role : CodeableConcept ;
   rank : string ;
}
