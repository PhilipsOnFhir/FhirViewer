import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { EncounterLocationStatusEnum } from './EncounterLocationStatusEnum'
import { Period } from './Period'
import { Reference } from './Reference'

export class Encounter_Location      extends BackboneElement
{

   static def : string = 'Encounter_Location';
   location : Reference ;
   status : EncounterLocationStatusEnum ;
   period : Period ;
}
