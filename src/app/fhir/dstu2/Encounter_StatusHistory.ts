import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { EncounterStateEnum } from './EncounterStateEnum'
import { Period } from './Period'

export class Encounter_StatusHistory      extends BackboneElement
{

   static def : string = 'Encounter_StatusHistory';
   status : EncounterStateEnum ;
   period : Period ;
}
