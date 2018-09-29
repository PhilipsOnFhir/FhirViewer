import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'

export class CapabilityStatement_Software      extends BackboneElement
{

   static def : string = 'CapabilityStatement_Software';
   name : string ;
   version : string ;
   releaseDate : string ;
}
