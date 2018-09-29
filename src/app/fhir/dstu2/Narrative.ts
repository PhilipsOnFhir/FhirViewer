import { DomainResource } from './DomainResource'
import { Element } from './Element'
import { NarrativeStatusEnum } from './NarrativeStatusEnum'

export class Narrative      extends Element
{

   static def : string = 'Narrative';
   status : NarrativeStatusEnum ;
   null : string ;
}
