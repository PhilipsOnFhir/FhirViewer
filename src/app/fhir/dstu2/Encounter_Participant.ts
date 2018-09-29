import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Period } from './Period'
import { Reference } from './Reference'

export class Encounter_Participant      extends BackboneElement
{

   static def : string = 'Encounter_Participant';
   type : CodeableConcept [];
   period : Period ;
   individual : Reference ;
}
