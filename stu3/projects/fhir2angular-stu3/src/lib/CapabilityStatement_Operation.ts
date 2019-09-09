import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'

export class CapabilityStatement_Operation      extends BackboneElement
{

   static def : string = 'CapabilityStatement_Operation';
   name : string ;
   definition : Reference ;
}
