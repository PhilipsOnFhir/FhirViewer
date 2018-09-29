import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'
import { SimpleQuantity } from './SimpleQuantity'

export class Medication_Content      extends BackboneElement
{

   static def : string = 'Medication_Content';
   item : Reference ;
   amount : SimpleQuantity ;
}
