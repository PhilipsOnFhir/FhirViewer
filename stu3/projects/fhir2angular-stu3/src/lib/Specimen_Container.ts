import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { Quantity } from './Quantity'
import { Reference } from './Reference'

export class Specimen_Container      extends BackboneElement
{

   static def : string = 'Specimen_Container';
   identifier : Identifier [];
   description : string ;
   type : CodeableConcept ;
   capacity : Quantity ;
   specimenQuantity : Quantity ;
   additiveCodeableConcept : CodeableConcept ;
   additiveReference : Reference ;
}
