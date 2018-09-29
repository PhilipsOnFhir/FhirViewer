import { BackboneElement } from './BackboneElement'
import { ContactPoint } from './ContactPoint'
import { DomainResource } from './DomainResource'

export class ImplementationGuide_Contact      extends BackboneElement
{

   static def : string = 'ImplementationGuide_Contact';
   name : string ;
   telecom : ContactPoint [];
}
