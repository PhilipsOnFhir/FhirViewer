import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { EncounterStatusEnum } from './EncounterStatusEnum'
import { Period } from './Period'

export class Encounter_StatusHistory      extends BackboneElement
{

   static def : string = 'Encounter_StatusHistory';
   status : EncounterStatusEnum ;
   period : Period ;
}
