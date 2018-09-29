import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'

export class CapabilityStatement_Operation      extends BackboneElement
{

   static def : string = 'CapabilityStatement_Operation';
   name : string ;
   definition : string ;
   documentation : string ;
}
