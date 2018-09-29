import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { ProductPlan_Benefit } from './ProductPlan_Benefit'
import { Reference } from './Reference'

export class ProductPlan_Coverage      extends BackboneElement
{

   static def : string = 'ProductPlan_Coverage';
   type : CodeableConcept ;
   network : Reference [];
   benefit : ProductPlan_Benefit [];
}
