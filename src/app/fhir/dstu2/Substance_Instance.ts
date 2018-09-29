import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { SimpleQuantity } from './SimpleQuantity'

export class Substance_Instance      extends BackboneElement
{

   static def : string = 'Substance_Instance';
   identifier : Identifier ;
   expiry : string ;
   quantity : SimpleQuantity ;
}
