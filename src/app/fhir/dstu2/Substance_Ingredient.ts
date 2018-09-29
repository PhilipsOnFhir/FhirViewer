import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { Ratio } from './Ratio'
import { Reference } from './Reference'

export class Substance_Ingredient      extends BackboneElement
{

   static def : string = 'Substance_Ingredient';
   quantity : Ratio ;
   substance : Reference ;
}
