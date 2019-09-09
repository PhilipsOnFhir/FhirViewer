import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Quantity } from './Quantity'
import { Reference } from './Reference'

export class Medication_Content      extends BackboneElement
{

   static def : string = 'Medication_Content';
   itemCodeableConcept : CodeableConcept ;
   itemReference : Reference ;
   amount : Quantity ;
}
