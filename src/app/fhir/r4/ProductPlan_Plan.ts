import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { ProductPlan_GeneralCost } from './ProductPlan_GeneralCost'
import { ProductPlan_SpecificCost } from './ProductPlan_SpecificCost'
import { Reference } from './Reference'

export class ProductPlan_Plan      extends BackboneElement
{

   static def : string = 'ProductPlan_Plan';
   identifier : Identifier [];
   type : CodeableConcept ;
   coverageArea : Reference [];
   network : Reference [];
   generalCost : ProductPlan_GeneralCost [];
   specificCost : ProductPlan_SpecificCost [];
}
