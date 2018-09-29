import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { EpisodeOfCareStatusEnum } from './EpisodeOfCareStatusEnum'
import { Period } from './Period'

export class EpisodeOfCare_StatusHistory      extends BackboneElement
{

   static def : string = 'EpisodeOfCare_StatusHistory';
   status : EpisodeOfCareStatusEnum ;
   period : Period ;
}
