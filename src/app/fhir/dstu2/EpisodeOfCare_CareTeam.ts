import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Period } from './Period'
import { Reference } from './Reference'

export class EpisodeOfCare_CareTeam      extends BackboneElement
{

   static def : string = 'EpisodeOfCare_CareTeam';
   role : CodeableConcept [];
   period : Period ;
   member : Reference ;
}
