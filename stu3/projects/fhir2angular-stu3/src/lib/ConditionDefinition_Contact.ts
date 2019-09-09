import { BackboneElement } from './BackboneElement'
import { ContactPoint } from './ContactPoint'
import { DomainResource } from './DomainResource'

export class ConditionDefinition_Contact      extends BackboneElement
{

   static def : string = 'ConditionDefinition_Contact';
   name : string ;
   telecom : ContactPoint [];
}
