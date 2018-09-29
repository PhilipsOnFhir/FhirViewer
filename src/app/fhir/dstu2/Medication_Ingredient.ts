import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { Ratio } from './Ratio'
import { Reference } from './Reference'

export class Medication_Ingredient      extends BackboneElement
{

   static def : string = 'Medication_Ingredient';
   item : Reference ;
   amount : Ratio ;
}
