import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { EpisodeOfCareStatusEnum } from './EpisodeOfCareStatusEnum'
import { EpisodeOfCare_CareTeam } from './EpisodeOfCare_CareTeam'
import { EpisodeOfCare_StatusHistory } from './EpisodeOfCare_StatusHistory'
import { Identifier } from './Identifier'
import { Period } from './Period'
import { Reference } from './Reference'

export class EpisodeOfCare      extends DomainResource
{

   static def : string = 'EpisodeOfCare';
   identifier : Identifier [];
   status : EpisodeOfCareStatusEnum ;
   statusHistory : EpisodeOfCare_StatusHistory [];
   type : CodeableConcept [];
   condition : Reference [];
   patient : Reference ;
   managingOrganization : Reference ;
   period : Period ;
   referralRequest : Reference [];
   careManager : Reference ;
   careTeam : EpisodeOfCare_CareTeam [];
}
