import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'

export class Conformance_Operation      extends BackboneElement
{

   static def : string = 'Conformance_Operation';
   name : string ;
   definition : Reference ;
}
