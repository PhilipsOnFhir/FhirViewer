import { BackboneElement } from './BackboneElement'
import { Coding } from './Coding'
import { DomainResource } from './DomainResource'
import { Quantity } from './Quantity'

export class Coverage_Copay      extends BackboneElement
{

   static def : string = 'Coverage_Copay';
   type : Coding ;
   value : Quantity ;
}
