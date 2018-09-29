import { BackboneElement } from './BackboneElement'
import { ContactPoint } from './ContactPoint'
import { DomainResource } from './DomainResource'

export class ConceptMap_Contact      extends BackboneElement
{

   static def : string = 'ConceptMap_Contact';
   name : string ;
   telecom : ContactPoint [];
}
