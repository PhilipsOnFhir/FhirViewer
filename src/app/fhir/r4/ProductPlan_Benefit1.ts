import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { ProductPlan_Cost } from './ProductPlan_Cost'

export class ProductPlan_Benefit1      extends BackboneElement
{

   static def : string = 'ProductPlan_Benefit1';
   type : CodeableConcept ;
   cost : ProductPlan_Cost [];
}
