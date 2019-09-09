import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'

export class Location_Position      extends BackboneElement
{

   static def : string = 'Location_Position';
   longitude : string ;
   latitude : string ;
   altitude : string ;
}
