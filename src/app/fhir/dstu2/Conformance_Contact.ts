import { BackboneElement } from './BackboneElement'
import { ContactPoint } from './ContactPoint'
import { DomainResource } from './DomainResource'

export class Conformance_Contact      extends BackboneElement
{

   static def : string = 'Conformance_Contact';
   name : string ;
   telecom : ContactPoint [];
}
