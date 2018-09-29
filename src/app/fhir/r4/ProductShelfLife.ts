import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { Quantity } from './Quantity'

export class ProductShelfLife      extends BackboneElement
{

   static def : string = 'ProductShelfLife';
   identifier : Identifier ;
   type : CodeableConcept ;
   period : Quantity ;
   specialPrecautionsForStorage : CodeableConcept [];
}
