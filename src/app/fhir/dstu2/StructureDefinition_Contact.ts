import { BackboneElement } from './BackboneElement'
import { ContactPoint } from './ContactPoint'
import { DomainResource } from './DomainResource'

export class StructureDefinition_Contact      extends BackboneElement
{

   static def : string = 'StructureDefinition_Contact';
   name : string ;
   telecom : ContactPoint [];
}
