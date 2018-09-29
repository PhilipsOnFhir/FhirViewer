import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'

export class Bundle_Link      extends BackboneElement
{

   static def : string = 'Bundle_Link';
   relation : string ;
   url : string ;
}
