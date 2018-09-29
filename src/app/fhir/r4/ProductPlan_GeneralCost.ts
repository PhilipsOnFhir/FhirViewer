import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Money } from './Money'

export class ProductPlan_GeneralCost      extends BackboneElement
{

   static def : string = 'ProductPlan_GeneralCost';
   type : CodeableConcept ;
   groupSize : string ;
   cost : Money ;
   comment : string ;
}
