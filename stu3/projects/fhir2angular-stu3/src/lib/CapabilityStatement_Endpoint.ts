import { BackboneElement } from './BackboneElement'
import { Coding } from './Coding'
import { DomainResource } from './DomainResource'

export class CapabilityStatement_Endpoint      extends BackboneElement
{

   static def : string = 'CapabilityStatement_Endpoint';
   protocol : Coding ;
   address : string ;
}
