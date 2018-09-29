import { BackboneElement } from './BackboneElement'
import { ContactPoint } from './ContactPoint'
import { DomainResource } from './DomainResource'

export class ValueSet_Contact      extends BackboneElement
{

   static def : string = 'ValueSet_Contact';
   name : string ;
   telecom : ContactPoint [];
}
