import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { ProductPlan_Limit } from './ProductPlan_Limit'

export class ProductPlan_Benefit      extends BackboneElement
{

   static def : string = 'ProductPlan_Benefit';
   type : CodeableConcept ;
   requirement : string ;
   limit : ProductPlan_Limit [];
}
