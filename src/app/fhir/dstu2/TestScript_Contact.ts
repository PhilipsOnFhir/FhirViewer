import { BackboneElement } from './BackboneElement'
import { ContactPoint } from './ContactPoint'
import { DomainResource } from './DomainResource'

export class TestScript_Contact      extends BackboneElement
{

   static def : string = 'TestScript_Contact';
   name : string ;
   telecom : ContactPoint [];
}
