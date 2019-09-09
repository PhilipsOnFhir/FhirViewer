import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Ratio } from './Ratio'
import { Reference } from './Reference'

export class Medication_Ingredient      extends BackboneElement
{

   static def : string = 'Medication_Ingredient';
   itemCodeableConcept : CodeableConcept ;
   itemReference : Reference ;
   isActive : boolean ;
   amount : Ratio ;
}
