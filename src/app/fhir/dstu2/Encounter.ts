import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Duration } from './Duration'
import { EncounterClassEnum } from './EncounterClassEnum'
import { EncounterStateEnum } from './EncounterStateEnum'
import { Encounter_Hospitalization } from './Encounter_Hospitalization'
import { Encounter_Location } from './Encounter_Location'
import { Encounter_Participant } from './Encounter_Participant'
import { Encounter_StatusHistory } from './Encounter_StatusHistory'
import { Identifier } from './Identifier'
import { Period } from './Period'
import { Reference } from './Reference'

export class Encounter      extends DomainResource
{

   static def : string = 'Encounter';
   identifier : Identifier [];
   status : EncounterStateEnum ;
   statusHistory : Encounter_StatusHistory [];
   class : EncounterClassEnum ;
   type : CodeableConcept [];
   priority : CodeableConcept ;
   patient : Reference ;
   episodeOfCare : Reference [];
   incomingReferral : Reference [];
   participant : Encounter_Participant [];
   appointment : Reference ;
   period : Period ;
   length : Duration ;
   reason : CodeableConcept [];
   indication : Reference [];
   hospitalization : Encounter_Hospitalization ;
   location : Encounter_Location [];
   serviceProvider : Reference ;
   partOf : Reference ;
}
