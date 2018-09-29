import { BackboneElement } from './BackboneElement'
import { ContactPoint } from './ContactPoint'
import { DomainResource } from './DomainResource'

export class OperationDefinition_Contact      extends BackboneElement
{

   static def : string = 'OperationDefinition_Contact';
   name : string ;
   telecom : ContactPoint [];
}
