import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { Quantity } from './Quantity'

export class Substance_Instance      extends BackboneElement
{

   static def : string = 'Substance_Instance';
   identifier : Identifier ;
   expiry : string ;
   quantity : Quantity ;
}
