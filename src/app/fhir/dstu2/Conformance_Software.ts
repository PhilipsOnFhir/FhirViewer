import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'

export class Conformance_Software      extends BackboneElement
{

   static def : string = 'Conformance_Software';
   name : string ;
   version : string ;
   releaseDate : string ;
}
