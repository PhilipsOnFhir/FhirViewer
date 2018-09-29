import { BackboneElement } from './BackboneElement'
import { ContactPoint } from './ContactPoint'
import { DomainResource } from './DomainResource'

export class NamingSystem_Contact      extends BackboneElement
{

   static def : string = 'NamingSystem_Contact';
   name : string ;
   telecom : ContactPoint [];
}
