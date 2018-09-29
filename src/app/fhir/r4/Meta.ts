import { Coding } from './Coding'
import { DomainResource } from './DomainResource'
import { Element } from './Element'

export class Meta      extends Element
{

   static def : string = 'Meta';
   versionId : string ;
   lastUpdated : string ;
   source : string ;
   profile : string [];
   security : Coding [];
   tag : Coding [];
}
