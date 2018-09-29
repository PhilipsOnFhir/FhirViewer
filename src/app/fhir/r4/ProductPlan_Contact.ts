import { Address } from './Address'
import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { ContactPoint } from './ContactPoint'
import { DomainResource } from './DomainResource'
import { HumanName } from './HumanName'

export class ProductPlan_Contact      extends BackboneElement
{

   static def : string = 'ProductPlan_Contact';
   purpose : CodeableConcept ;
   name : HumanName ;
   telecom : ContactPoint [];
   address : Address ;
}
