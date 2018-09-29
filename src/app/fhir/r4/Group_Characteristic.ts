import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Period } from './Period'
import { Quantity } from './Quantity'
import { Range } from './Range'

export class Group_Characteristic      extends BackboneElement
{

   static def : string = 'Group_Characteristic';
   code : CodeableConcept ;
   valueCodeableConcept : CodeableConcept ;
   valueBoolean : string ;
   valueQuantity : Quantity ;
   valueRange : Range ;
   exclude : string ;
   period : Period ;
}
