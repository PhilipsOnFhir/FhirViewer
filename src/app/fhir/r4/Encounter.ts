import { CodeableConcept } from './CodeableConcept'
import { Coding } from './Coding'
import { DomainResource } from './DomainResource'
import { EncounterStatusEnum } from './EncounterStatusEnum'
import { Encounter_ClassHistory } from './Encounter_ClassHistory'
import { Encounter_Diagnosis } from './Encounter_Diagnosis'
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
   status : EncounterStatusEnum ;
   statusHistory : Encounter_StatusHistory [];
   class : Coding ;
   classHistory : Encounter_ClassHistory [];
   type : CodeableConcept [];
   serviceType : CodeableConcept ;
   priority : CodeableConcept ;
   subject : Reference ;
   episodeOfCare : Reference [];
   basedOn : Reference [];
   participant : Encounter_Participant [];
   appointment : Reference ;
   period : Period ;
   length : string ;
   reason : CodeableConcept [];
   diagnosis : Encounter_Diagnosis [];
   account : Reference [];
   hospitalization : Encounter_Hospitalization ;
   location : Encounter_Location [];
   serviceProvider : Reference ;
   partOf : Reference ;
}
