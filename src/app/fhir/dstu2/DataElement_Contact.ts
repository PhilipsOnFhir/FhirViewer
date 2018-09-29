import { BackboneElement } from './BackboneElement'
import { ContactPoint } from './ContactPoint'
import { DomainResource } from './DomainResource'

export class DataElement_Contact      extends BackboneElement
{

   static def : string = 'DataElement_Contact';
   name : string ;
   telecom : ContactPoint [];
}
