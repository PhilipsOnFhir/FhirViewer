import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { ProductPlan_Benefit1 } from './ProductPlan_Benefit1'

export class ProductPlan_SpecificCost      extends BackboneElement
{

   static def : string = 'ProductPlan_SpecificCost';
   category : CodeableConcept ;
   benefit : ProductPlan_Benefit1 [];
}
