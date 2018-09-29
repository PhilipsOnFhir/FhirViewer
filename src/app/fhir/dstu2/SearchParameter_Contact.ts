import { BackboneElement } from './BackboneElement'
import { ContactPoint } from './ContactPoint'
import { DomainResource } from './DomainResource'

export class SearchParameter_Contact      extends BackboneElement
{

   static def : string = 'SearchParameter_Contact';
   name : string ;
   telecom : ContactPoint [];
}
