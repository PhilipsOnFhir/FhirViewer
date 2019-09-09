import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Quantity } from './Quantity'
import { Range } from './Range'

export class PlanDefinition_Target      extends BackboneElement
{

   static def : string = 'PlanDefinition_Target';
   measure : CodeableConcept ;
   detailQuantity : Quantity ;
   detailRange : Range ;
   detailCodeableConcept : CodeableConcept ;
   due : string ;
}
