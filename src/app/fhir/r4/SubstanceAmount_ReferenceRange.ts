import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { Quantity } from './Quantity'

export class SubstanceAmount_ReferenceRange      extends BackboneElement
{

   static def : string = 'SubstanceAmount_ReferenceRange';
   lowLimit : Quantity ;
   highLimit : Quantity ;
}
