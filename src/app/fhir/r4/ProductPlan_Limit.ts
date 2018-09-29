import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Quantity } from './Quantity'

export class ProductPlan_Limit      extends BackboneElement
{

   static def : string = 'ProductPlan_Limit';
   value : Quantity ;
   code : CodeableConcept ;
}
