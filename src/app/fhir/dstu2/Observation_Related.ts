import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { ObservationRelationshipTypeEnum } from './ObservationRelationshipTypeEnum'
import { Reference } from './Reference'

export class Observation_Related      extends BackboneElement
{

   static def : string = 'Observation_Related';
   type : ObservationRelationshipTypeEnum ;
   target : Reference ;
}
