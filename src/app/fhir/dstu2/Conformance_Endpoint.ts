import { BackboneElement } from './BackboneElement'
import { Coding } from './Coding'
import { DomainResource } from './DomainResource'

export class Conformance_Endpoint      extends BackboneElement
{

   static def : string = 'Conformance_Endpoint';
   protocol : Coding ;
   address : string ;
}
